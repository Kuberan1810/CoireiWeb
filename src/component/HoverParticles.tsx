import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface HoverParticlesProps {
  className?: string;
}

const HoverParticles: React.FC<HoverParticlesProps> = ({ className }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = null; // Transparent background
    scene.fog = new THREE.FogExp2('#ffffff', 0.015);

    // Get container dimensions
    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;

    const camera = new THREE.PerspectiveCamera(75, width / height, 1, 1000);
    camera.position.z = 40;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0); // transparent background
    
    // Clear the container before appending (in case of re-renders)
    containerRef.current.innerHTML = '';
    containerRef.current.appendChild(renderer.domElement);

    // Particle geometry
    const particleCount = 600; // Increased to make the ball look solid
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const originalPositions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);
    
    const color = new THREE.Color();
    // Vibrant colors matching the brand
    const colorsList = ['#F78014', '#FED607', '#9BE0AA', '#0F4275', '#262626'];

    // Generate a 3D ball (Fibonacci sphere for even distribution)
    const sphereRadius = 18; // Size of the 3D ball
    
    for (let i = 0; i < particleCount; i++) {
      // Fibonacci sphere algorithm
      const phi = Math.acos(1 - 2 * (i + 0.5) / particleCount);
      const theta = Math.PI * (1 + Math.sqrt(5)) * i;
      
      // Add slight randomness to depth for a more organic, less rigid ball
      const r = sphereRadius + (Math.random() - 0.5) * 4;

      const x = Math.cos(theta) * Math.sin(phi) * r;
      const y = Math.sin(theta) * Math.sin(phi) * r;
      const z = Math.cos(phi) * r;
      
      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      originalPositions[i * 3] = x;
      originalPositions[i * 3 + 1] = y;
      originalPositions[i * 3 + 2] = z;

      color.set(colorsList[Math.floor(Math.random() * colorsList.length)]);
      color.lerp(new THREE.Color('#ffffff'), Math.random() * 0.2);
      
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Add uniform sizes for particles
    const sizes = new Float32Array(particleCount);
    for (let i = 0; i < particleCount; i++) {
      sizes[i] = 0.5;
    }
    geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

    // Custom Shader Material for better looking dots
    const vertexShader = `
      attribute float size;
      varying vec3 vColor;
      void main() {
        vColor = color;
        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = size * (250.0 / -mvPosition.z); 
        gl_Position = projectionMatrix * mvPosition;
      }
    `;

    const fragmentShader = `
      varying vec3 vColor;
      void main() {
        // Create soft circles
        float r = 0.5;
        vec2 d = gl_PointCoord - vec2(0.5, 0.5);
        if (length(d) > r) discard;
        
        gl_FragColor = vec4(vColor, 0.9);
      }
    `;

    const material = new THREE.ShaderMaterial({
      uniforms: {},
      vertexShader,
      fragmentShader,
      vertexColors: true,
      transparent: true,
      depthWrite: false,
      blending: THREE.NormalBlending
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);

    // Mouse Interaction
    const mouse = new THREE.Vector2(-9999, -9999);
    const raycaster = new THREE.Raycaster();
    const planeGeometry = new THREE.PlaneGeometry(2000, 2000);
    const planeMesh = new THREE.Mesh(planeGeometry, new THREE.MeshBasicMaterial({ visible: false }));
    scene.add(planeMesh); // Invisible plane at z=0 for raycasting

    const onMouseMove = (event: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (!rect) return;
      
      mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
    };
    
    window.addEventListener('mousemove', onMouseMove);

    const handleResize = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener('resize', handleResize);

    const startTime = performance.now();
    let animationFrameId: number;

    // Give it a static slight tilt so the 3D sphere nature is visible without spinning
    particles.rotation.set(0.3, 0.4, 0);

    const animate = () => {
      const time = (performance.now() - startTime) / 1000;

      // (Rotation removed as requested)

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObject(planeMesh);
      let worldMousePoint = new THREE.Vector3(-9999, -9999, 0);
      let localMousePoint = new THREE.Vector3(-9999, -9999, 0);
      
      if (intersects.length > 0) {
        worldMousePoint.copy(intersects[0].point);
        // Follow the mouse pointer
        particles.position.lerp(worldMousePoint, 0.1);
        
        localMousePoint.copy(worldMousePoint).sub(particles.position);
        localMousePoint.applyEuler(new THREE.Euler(-particles.rotation.x, -particles.rotation.y, -particles.rotation.z));
      } else {
        particles.position.lerp(new THREE.Vector3(0, 0, 0), 0.02);
      }

      const positionsAttr = geometry.attributes.position as THREE.BufferAttribute;
      const posArray = positionsAttr.array as Float32Array;

      // Update particles
      for (let i = 0; i < particleCount; i++) {
        const ix = i * 3;
        const iy = ix + 1;
        const iz = ix + 2;

        const ox = originalPositions[ix];
        const oy = originalPositions[iy];
        const oz = originalPositions[iz];

        const noiseX = Math.sin(time * 0.8 + oy * 0.05) * 2.0;
        const noiseY = Math.cos(time * 0.6 + ox * 0.05) * 2.0;
        
        let targetX = ox + noiseX;
        let targetY = oy + noiseY;
        let targetZ = oz;

        const dx = targetX - localMousePoint.x;
        const dy = targetY - localMousePoint.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        // Smaller repel radius so the gap isn't too large
        const repelRadius = 25; 
        if (dist < repelRadius && localMousePoint.x !== -9999) {
          const force = Math.pow((repelRadius - dist) / repelRadius, 2); 
          const angle = Math.atan2(dy, dx);
          
          targetX += Math.cos(angle) * force * 20; 
          targetY += Math.sin(angle) * force * 20;
          targetZ += force * 10; 
        }

        posArray[ix] += (targetX - posArray[ix]) * 0.02;
        posArray[iy] += (targetY - posArray[iy]) * 0.02;
        posArray[iz] += (targetZ - posArray[iz]) * 0.02;
      }

      positionsAttr.needsUpdate = true;
      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return <div ref={containerRef} className={className} />;
};

export default HoverParticles;
