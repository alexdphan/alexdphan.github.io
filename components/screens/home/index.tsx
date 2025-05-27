import { DeployButton } from "@/components/deploy";
import { Footer } from "@/components/footer";
import * as FadeIn from "@/components/motion/staggers/fade";
import { Posts } from "@/components/posts";
import { MediaScroll } from "@/components/media-scroll";

const Spacer = () => <div style={{ marginTop: "24px" }} />;

export default function Home() {
  return (
    <FadeIn.Container>
      <FadeIn.Item>
        <div className="flex justify-between">
          <div>
            <h1>AP</h1>
            <h2>Great to see you here</h2>
          </div>
        </div>
      </FadeIn.Item>
      <Spacer />
      <FadeIn.Item>
        <MediaScroll />
      </FadeIn.Item>
      <Spacer />
      <FadeIn.Item>
        <p>
          I like to build things that envoke emotion. I try my best to be as well rounded as I can be, and understand the world around me as best as I can.
        </p>
      </FadeIn.Item>
      <Spacer />
      <FadeIn.Item>
        <p>
          I'm the first growth engineer at Browserbase, an exciting startup in San Francisco. 
        </p>
      </FadeIn.Item>
      <Spacer />
      <FadeIn.Item>
        <p>
          I'm deeply rooted in fintech, infrastructure, and platforms that could be used by the masses.

          {/* <ul>
            <li>Outlier Fellow at Floodgate</li>
            <li>Modular Fellow at Celestia</li>
            <li>First Analyst at Alchemy</li>
          </ul> */}

        </p>
      </FadeIn.Item>
      <FadeIn.Item>
        <Posts category="guides" />
      </FadeIn.Item>
      <FadeIn.Item>
        <Posts category="examples" />
      </FadeIn.Item>
      <Spacer />
      <FadeIn.Item>
        <Footer />
      </FadeIn.Item>
      <DeployButton />
    </FadeIn.Container>
  );
}
