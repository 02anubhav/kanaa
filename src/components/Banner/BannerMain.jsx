import useIsMobile from "../../hooks/useIsMobile";
import Banner from "./Banner";

export default function App() {
  return (
    <Banner>
      <Banner.Arrow direction="left" />
      <Banner.Text>
        Free Delivery for orders over 300 SAR
        <Banner.Link href="/terms">T&Cs</Banner.Link>
      </Banner.Text>
      <Banner.Arrow direction="right" onClick={() => console.log("Right")} />
    </Banner>
  );
}
