import { Router } from "./router/Router";
import "./styles.css";

const user = {
  name: "らは",
  image: "https://source.unsplash.com/brFsZ7qszSY",
  email: "11111@aaaa.com",
  phone: "090-xxxx-xxxx",
  company: {
    name: "テスト株式会社"
  },
  website: "https://google.com"
};

export default function App() {
  return <Router />;
}
