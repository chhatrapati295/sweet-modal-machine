import { useRef, useState } from "react";

const App = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleToggleModal = () => {
    setModalOpen(!modalOpen);
  };

  if (modalOpen) {
    document.body.style.overflowY = "hidden";
  } else {
    document.body.style.overflowY = "auto";
  }

  const handleCloseModalClickOutside = (e: Event) => {
    modalRef.current &&
      !modalRef.current.contains(e.target as Node) &&
      setModalOpen(false);
  };

  return (
    <div className="p-4 flex flex-col gap-4 relative">
      <h1>Modal</h1>
      <button
        aria-label="toggleModalButton"
        onClick={handleToggleModal}
        className="border rounded-md p-2 text-sm bg-green-200 w-fit font-semibold"
      >
        {modalOpen ? "Close modal" : "Open modal"}
      </button>

      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo minima
        eius magni repudiandae consequuntur, ullam aspernatur assumenda, quidem
        dolores ipsum earum veniam quo dolorum? Cum minus natus sed eos harum,
        ipsum iusto aspernatur, autem porro illum delectus atque architecto a
        earum, hic molestias recusandae accusamus quam. Sapiente illum numquam,
        porro iure necessitatibus eius beatae rerum assumenda! Cupiditate harum
        perspiciatis incidunt perferendis, doloribus error veniam expedita
        adipisci. Nisi inventore quae voluptatibus qui quis dignissimos veniam
        voluptatem veritatis quaerat dolorum aperiam nostrum a, accusantium sint
        magni est. Delectus distinctio neque iure. Quam commodi magni tenetur
        voluptatem id sed cupiditate magnam quisquam nulla velit vitae,
        perspiciatis nobis? Dolore, necessitatibus soluta. Nisi incidunt quia
        fuga rerum dolore esse, deleniti, nihil cum reprehenderit eveniet fugit.
        Mollitia explicabo inventore quis veniam. Quibusdam nam expedita fuga
        deserunt numquam. Cupiditate eaque, deleniti reprehenderit beatae,
        quaerat dolor facilis voluptas perferendis, praesentium rem optio enim
        eius dolore molestiae exercitationem dolores debitis consectetur? Velit
        sit harum soluta praesentium deleniti voluptas sed reprehenderit,
        ducimus assumenda temporibus tempore aperiam corrupti officia provident
        debitis autem doloribus expedita ipsum dolores nihil maxime pariatur
        nemo saepe beatae? Iusto officia natus facilis sint eveniet libero porro
        commodi excepturi alias ratione rem animi modi ducimus soluta incidunt
        doloribus culpa consequuntur dolorum nemo, eius autem a saepe minima
        adipisci. Minima itaque magnam quam excepturi illo, deserunt saepe qui
        autem, similique, iusto repellendus quis sapiente assumenda numquam! Non
        itaque maiores impedit, ratione aut sit atque quia dolor doloremque
        minima vero beatae aliquid qui quas. Eaque, animi quas, corporis
        perferendis, tenetur vitae harum magnam non voluptas maxime odit
        temporibus in amet soluta! Consectetur quo blanditiis mollitia quia
        impedit libero possimus vel unde, obcaecati eligendi nulla ducimus dolor
        dolore dicta commodi corrupti laudantium, officia beatae reprehenderit
        recusandae ex quasi! Cumque blanditiis, itaque nisi minima, animi
        temporibus quidem, sunt enim voluptate nemo mollitia?
      </p>

      {/* MODAL UI */}
      {modalOpen && (
        <div
          className="fixed h-screen w-screen top-0 left-0 flex justify-center items-center bg-black bg-opacity-60 backdrop-blur-sm"
          onClick={handleCloseModalClickOutside}
        >
          <div
            ref={modalRef}
            className="h-[60vh] w-[80vw] p-4 bg-gray-200 rounded-md flex justify-center items-center relative"
          >
            Modal body
            <button
              aria-label="modalCloseButton"
              onClick={handleToggleModal}
              className="p-2 bg-black w-8 h-8 rounded-full text-white absolute top-4 right-4 flex items-center justify-center"
            >
              X
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
