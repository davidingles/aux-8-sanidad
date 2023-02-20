import { ContactShadows, Environment, OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import type { NextPage } from 'next'
import { Suspense } from 'react'
// import { David } from '../components/David'
import { Dav } from '../components/Dav'
import styles from './Index.module.css'
// import { Pau } from '../components/Pau'

const estilos = {

  color: '#dfac12',
  // margin:'11px 11px',
  // position: 'absolute'

}



const Home: NextPage = () => {

  // let escala = 1
  // let x = window.matchMedia("(max-width:444px)")

  // function quer(x){
  //   if(x.matches){
  //     escala = .5
  //   }else{
  //     escala = 1
  //   }
  // }
  // x.addEventListener(quer)

  return (
    <>
      {/* <div className={styles.canvas} style={{backgroundColor: '#f5f5f5', width:'90%'}}>
        <Pau>

        </Pau>

      </div> */}
    
      <div className={styles.canvas} style={{backgroundColor: '#878787', width:'90%'}}>
       
        <div className={styles.container}>
          <h1 className={styles.titulo} style={estilos} >Auxiliar Manipuladora</h1>
        </div>
        <div className={styles.movil}>
          <h1 className={styles.telefono} style={estilos} >968 693 575</h1>
        </div> 
        <Canvas
          style={{ width: '100%', margin:'auto', height:'88vh', border:'2px solid black'}}
          camera={{view: 
            {
              enabled: true,
              fullWidth: 100,
              fullHeight: 100,
              offsetX: 0,
              offsetY: -30,
              width: 100,
              height: 100,
            }
            ,  focus: 10, fov: 80 ,zoom: 6, position:[0, .5, 1.5]}} >
          {/* <focus-camera> */}
          <ambientLight intensity={0.6} />
          <pointLight position={[10, 10, 10]} />
          {/* <directionalLight position={[-1, 0.5, 0]} /> */}
          <Suspense fallback={null}>
          {/* <Environment far={10} files="/nieve.hdr" ground={{ height: 10, scale: 1 }} /> */}
            
              <Dav 
                // className={styles.dav}
                scale={2}
                position={[-.0,0.07,0.]}
                rotation={[Math.PI / 1000, 0, 0]}
              />
          
          </Suspense>
          <OrbitControls autoRotate autoRotateSpeed={1} />
          <ContactShadows resolution={1024} scale={1} position={[0, -.01, 0]} blur={3} opacity={.3} far={1} color="#8a6246" />
        </Canvas>
      </div>
    </>

  )
}



export default Home
