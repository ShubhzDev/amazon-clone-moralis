import Sidebar from "../components/Sidebar";
import Main from "../components/Main";
import { AmazonProvider } from "../context/AmazonContext";

const styles = {
  container: "h-full w-full flex bg-[fff]",
};

export default function Home() {
  return (
    <div className={styles.container}>
      <Sidebar />
      <Main />
    </div>
  );
}
