function App() {
  return (
    <main className="h-full relative flex items-center justify-center flex-col xl:flex-row gap-16 xl:gap-30 py-16">
      <span className="w-127.5 h-254.5 rounded-full absolute bg-gradient-1 bottom-1/2 xl:bottom-[12.5%] -left-[85%] md:-left-[65%] xl:-left-[55%]"></span>
      <span className="w-127.5 h-254.5 rounded-full absolute bg-gradient-1 opacity-3 top-1/2 xl:top-[12.5%] -right-[83%] md:-right-[64%]"></span>
      <section className="mx-auto shadow-phone relative w-61.75 bg-white rounded-[30px] px-[9.5px] py-2.75">
        <div className="absolute top-0 right-1/2 translate-x-1/2 w-32.25 h-7.25 bg-white rounded-b-[14px]"></div>

        <div className="bg-purple-950/5 rounded-b-[20px] border border-purple-50 rounded-t-[20px]">
          <header className="p-4 pt-6.5 rounded-t-[20px] rounded-b-md bg-gradient-1 flex items-center">
            <div className="flex items-center gap-2">
              <svg
                width="4"
                height="10"
                viewBox="0 0 4 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2.10557 0.553005C2.35256 0.059027 2.95324 -0.141197 3.44721 0.105792C3.90591 0.335139 4.11131 0.869448 3.94056 1.34011L3.89443 1.44743L2.118 5.00022L3.89443 8.55301C4.12377 9.0117 3.96751 9.56239 3.54851 9.83647L3.44721 9.89465C2.98852 10.124 2.43783 9.96773 2.16374 9.54873L2.10557 9.44743L0.105573 5.44743C-0.0150818 5.20612 -0.0323182 4.92819 0.0538637 4.67642L0.105573 4.55301L2.10557 0.553005Z"
                  fill="white"
                />
              </svg>

              <img
                className="rounded-full size-6 ring ring-white"
                src="./images/avatar.jpg"
              />

              <div className="flex flex-col">
                <p className="preset-4 text-white">Samuel Green</p>
                <p className="preset-5 text-purple-300">Available to Walk</p>
              </div>
            </div>

            <p className="ml-auto flex flex-col gap-px">
              <span className="size-0.5 rounded-full bg-white"></span>
              <span className="size-0.5 rounded-full bg-white"></span>
              <span className="size-0.5 rounded-full bg-white"></span>
            </p>
          </header>

          <main className="px-2 py-3 flex flex-col items-start">
            <div className="flex flex-col gap-2 mb-4 text-purple-600 preset-5">
              <p className="rounded-lg rounded-bl-sm w-32 bg-purple-50 p-2 flex items-center justify-center">
                That sounds great. I’d be happy with that.
              </p>
              <p className="rounded-lg rounded-bl-sm w-32 bg-purple-50 p-2 flex items-center justify-center">
                Could you send over some pictures of your dog, please?
              </p>
            </div>

            <div className="self-end flex flex-col gap-2 preset-5 text-gray-500 mb-4">
              <div className="flex items-center justify-between">
                <img
                  className="size-10 rounded-[10px]"
                  src="./images/dog-image-1.jpg"
                  alt="Image of the dog"
                />
                <img
                  className="size-10 rounded-[10px]"
                  src="./images/dog-image-2.jpg"
                  alt="Image of the dog"
                />
                <img
                  className="size-10 rounded-[10px]"
                  src="./images/dog-image-3.jpg"
                  alt="Image of the dog"
                />
              </div>
              <p className="rounded-lg w-34 rounded-br-sm bg-white p-2 flex items-center justify-center">
                Here are a few pictures. She’s a happy girl!
              </p>
              <p className="ml-auto rounded-lg w-20 rounded-br-sm bg-white p-2 flex items-center justify-center">
                Can you make it?
              </p>
            </div>

            <div className="preset-5 text-purple-600 mb-2">
              <p className="rounded-lg rounded-bl-sm w-32 bg-purple-50 p-2 flex items-center justify-center">
                She looks so happy! The time we discussed works. How long shall
                I take her out for?
              </p>
            </div>

            <div className="rounded-lg rounded-bl-sm w-37.75 bg-gradient-1 p-2 flex items-center justify-start gap-2 text-white mb-2">
              <span className="size-3 ring ring-inset ring-pink-400 rounded-full"></span>
              <p className="preset-5">30 minute walk</p>
              <p className="preset-3 ml-auto">$29</p>
            </div>

            <div className="rounded-lg rounded-bl-sm w-37.75 bg-gradient-1 p-2 flex items-center justify-start gap-2 text-white mb-4">
              <span className="size-3 ring ring-inset ring-pink-400 rounded-full"></span>
              <p className="preset-5">1 hour walk</p>
              <p className="preset-3 ml-auto">$49</p>
            </div>

            <div className="pl-4 pr-2 bg-white w-full h-8.5 rounded-2xl flex justify-between items-center">
              <p className="preset-5 text-gray-300">Type a message…</p>
              <span className="size-6 flex items-center justify-center text-white rounded-full bg-purple-950">
                <svg
                  width="6"
                  height="10"
                  viewBox="0 0 6 10"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.355453 0.354703C0.792933 -0.0818545 1.48132 -0.115436 1.9574 0.253959L2.07173 0.354703L5.71251 3.9878C6.14999 4.42435 6.18364 5.11129 5.81347 5.58637L5.71251 5.70045L2.07173 9.33355C1.59779 9.80648 0.82939 9.80648 0.355453 9.33355C-0.0820276 8.89699 -0.11568 8.21005 0.254496 7.73498L0.355453 7.62089L3.13714 4.84412L0.355453 2.06736C-0.0820276 1.6308 -0.11568 0.943868 0.254496 0.468791L0.355453 0.354703Z"
                    fill="white"
                  />
                </svg>
              </span>
            </div>
          </main>
        </div>
      </section>

      <section className="z-1 mx-auto min-w-78 w-[75%] md:w-111 max-w-111 text-center xl:text-left">
        <h1 className="preset-1 text-purple-950 mb-6">Simple booking</h1>
        <p className="preset-2 text-gray-500">
          Stay in touch with our dog walkers through the chat interface. This
          makes it easy to discuss arrangements and make bookings. Once the walk
          has been completed you can rate your walker and book again all through
          the chat.
        </p>
      </section>
    </main>
  );
}

export default App;
