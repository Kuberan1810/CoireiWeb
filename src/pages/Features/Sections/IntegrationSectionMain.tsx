
import OurIntegrationsLottie from './animation/OurIntegrationsLottie'

const IntegrationSectionMain = () => {
  return (
      <>
          <section className="py-20 mx-15">
              <div className="flex flex-col items-center justify-center mb-20">
                  <div className="inline-flex items-center justify-center
          text-xl text-white py-2.5 px-10 bg-[#7B7B7B]/10 backdrop-blur-3xl border border-white/20 w-fit shadow-[inset_1px_2px_4px_rgba(255,255,255,0.10)] rounded-full mb-10"
                  >
                      <div className="text-lg">Seamless Integrations</div>
                  </div>

                  <div>
                      <h2 className="leading-none text-[#E3E3E0] text-[32px] font-normal md:text-[60px] max-w-220 text-center mb-5">
                          Native Integrations Across Your Execution Stack
                      </h2>
                      <p className="text-xl text-[#CECECE] ">Connect repositories, cloud providers, internal tools, and services into a single intelligent execution fabric.</p>
                  </div>
              </div>

              <OurIntegrationsLottie />
          </section>
      </>
  )
}

export default IntegrationSectionMain