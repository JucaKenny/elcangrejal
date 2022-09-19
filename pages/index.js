import { useContext, useEffect } from "react";
import Layout from "../components/Layout";
import FirebaseContext from "../context/firebaseContext";
import CardProducts from "../components/CardProducts";

export default function Home() {
  const { categories, getCategories } = useContext(FirebaseContext);
  useEffect(() => {
    getCategories();
  }, []);  
  return (
    <div>
      <Layout pagina="Inicio">
        {categories && <CardProducts categories={categories} />}
      </Layout>
    </div>
  );
}
