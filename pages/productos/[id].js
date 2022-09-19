import React, { useEffect, useContext, useState } from "react";
import { useRouter } from "next/router";
import FirebaseContext from "../../context/firebaseContext";
import Link from "next/link";
import Layout from "../../components/Layout";

function Productos() {
  const router = useRouter();
  const { products, getProducts } = useContext(FirebaseContext);
  const [error, setError] = useState(false);
  const [isID, setID] = useState("");
  useEffect(() => {
    // routing para obtener el id actual
    const {
      query: { id },
    } = router;

    //   const pathname = window.location.pathname;
    //const nuevaQuery = pathname.slice(11, pathname.length);
    //console.log(nuevaQuery);
    if (id) {
      setError(false);
      getProducts(id);
      setID(id);
    } else {
      setError(true);
    }
  }, [router]);

  return (
    <Layout pagina={`${isID}`}>
      <div>
        {error ? (
          <div>
            <p>El enlace no esta disponible...</p>
            <p>Vuelve a Inicio</p>
            <Link href="/">Ir a Inicio</Link>
          </div>
        ) : (
          <div>
            <Link href="/">
              <button> Ir a Inicio</button>
            </Link>

            {products ? (
              <>
                {products.map((p, i) => {
                  return (
                    <div key={i}>
                      <p>{p.name}</p>
                    </div>
                  );
                })}
              </>
            ) : (
              <p>El enlace no es el correcto...</p>
            )}
          </div>
        )}
      </div>
    </Layout>
  );
}

export default Productos;
