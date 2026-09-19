function App() {
  return (
    <main className="mx-auto relative w-61.75 bg-white rounded-[30px] px-[9.5px] py-[11px]">
      <div className="absolute top-0 right-1/2 translate-x-1/2 w-32.25 h-7.25 bg-white rounded-b-[14px]">
      </div>
      
      <section className="bg-purple-950/5">
      <header className="p-4 rounded-t-[20px] rounded-b-md bg-gradient-1 flex items-center">
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
            src="/src/images/avatar.jpg"
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

        <article className="rounded-b-[20px]">
          <div>
            <p>That sounds great. I’d be happy with that.</p>
            <p>Could you send over some pictures of your dog, please?</p>
          </div>

          <div>
            <p>Here are a few pictures. She’s a happy girl!</p>
            <p>Can you make it?</p>
          </div>

          <div>
            <p>
              She looks so happy! The time we discussed works. How long shall I
              take her out for?
            </p>
          </div>
        </article>
      </section>
    </main>
  );
}

export default App;
