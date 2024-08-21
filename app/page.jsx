import Feed from '@components/Feed';

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">AI Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        Prompts is an Open Source AI Tool 
        Which Offers All AI Advancement in 
        This Modern Competitive Era.
      </p>
      <Feed/>
    </section>
  )
}

export default Home
