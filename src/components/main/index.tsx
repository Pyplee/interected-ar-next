"use client"
import ModelViewer from './ModelViewer'
import ARButton from './ARButton'
import ContactForm from './ContactForm'
import AnimatedSection from './AnimatedSection'
import "../../app/globals.css"

function FirstBlock({ handleARClick }: { handleARClick: () => void }) {

  return (
    <>
      <div className="h-screen flex flex-col w-full justify-center items-center mt-10">
      <AnimatedSection>
        <div className="w-3/4 h-full">
        <div className="flex justify-start items-center">
          <ARButton onClick={handleARClick} />
        </div>
          <div className="border-8 border-black flex flex-col items-center w-full h-3/4 rounded-r-lg rounded-b-lg">
            <ModelViewer />
          </div>
        </div>
        </AnimatedSection>
      </div>
    </>
  );
}

function SecondBlock() {
  return (
    <>
        <AnimatedSection>
          <div className="min-h-screen flex w-full items-center bg-black text-white adaptive-block">
            <div className="flex flex-col items-start w-1/2 p-10 h-1/2 adaptive-subblock">
              <ContactForm />
              </div>
              <div className="flex flex-col items-start w-1/2 p-10 h-1/2 adaptive-subblock">
                <h2 className="text-lg font-bold">Lorem ipsum</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vulputate odio risus, et consectetur justo sollicitudin ac. Sed nec sodales urna. Aliquam eu tortor eros. Morbi dapibus nisi ornare, ultricies nisi sit amet, venenatis sem. Fusce vel suscipit sem. Quisque auctor neque et turpis dapibus, nec hendrerit tortor fringilla. Mauris aliquam imperdiet libero sit amet molestie. Nullam risus tellus, elementum id fermentum eget, dapibus vitae sem. Aenean ut auctor dui, ac molestie tellus. Aliquam cursus vestibulum sem. Proin accumsan urna in nunc semper pretium. Etiam rhoncus pellentesque orci quis finibus. Suspendisse vitae sagittis dolor. Duis malesuada libero enim, et aliquam nulla sagittis id. Mauris lobortis, orci non malesuada ultricies, sapien sapien condimentum felis, id mattis nisl leo a augue.</p>
              </div>
          </div>
        </AnimatedSection>
    </>
  );
}

export { FirstBlock, SecondBlock };