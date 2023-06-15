import React,{useRef} from 'react'
import Box from '@mui/material/Box';
import {CardComponent} from './CardComponent.jsx'
import imagenArticulo1 from '../../assets/grafanaPanel.jpg'
import imagenArticulo2 from '../../assets/elasticSofware.jpg'
import imagenArticulo3 from '../../assets/rpa.jpg'

const articulos = [
    {
        id:1,
        titulo:'Que es grafana y por que implementarlo?',
        autor:'Sonri',
        fecha:'jun 03/06/2023',
        imagen: imagenArticulo1,
        parrafo1:' Grafana es una herramienta de visualización y monitoreo de datos popular. Permite crear paneles interactivos y atractivos, brindando una visión clara de los datos en tiempo real.',
        parrafo2:'La implementación de Grafana ofrece transparencia y comprensión de datos, facilitando decisiones informadas. Es altamente personalizable y compatible con diversas fuentes de datos, lo que permite identificar correlaciones y tendencias. Grafana también ofrece alertas y notificaciones en tiempo real, lo que permite una respuesta rápida ante problemas. Estas características ayudan a optimizar el rendimiento de los sistemas y mejorar la eficiencia y seguridad de las operaciones.',
        parrafo3:'En conclusión, Grafana es una herramienta esencial para visualizar y monitorear datos en tiempo real. Su implementación proporciona beneficios como transparencia, personalización y alertas proactivas. Al aprovechar Grafana, las organizaciones pueden mejorar su rendimiento y tomar medidas correctivas para optimizar sus operaciones.'
    },
    {
        id:2,
        titulo:'que beneficios implican el monitoreo remoto',
        autor:'Sonri',
        fecha:'jun 03/06/2023',
        imagen: imagenArticulo2,
        parrafo1:'El monitoreo de sistemas informáticos es crucial para garantizar un rendimiento óptimo y prevenir problemas. Lo que permite detectar y solucionar rápidamente inconvenientes.',
        parrafo2:'El monitoreo permite optimizar la capacidad, identificar cuellos de botella y tomar decisiones informadas para mejorar la eficiencia y seguridad de los sistemas. Además, contribuye a mantener la continuidad del negocio y ofrecer una experiencia de usuario satisfactoria.',
        parrafo3:'En conclusión, el monitoreo de sistemas informáticos desempeña un papel fundamental. Proporciona visibilidad en tiempo real, optimiza el rendimiento y garantiza la continuidad del negocio. Es una práctica esencial para mantener la eficiencia y seguridad de los sistemas y brindar una experiencia de usuario óptima.'
    },
    {
        id:3,
        titulo:'Introducción a la Automatización Robótica de Procesos (RPA)',
        autor:'Sonri',
        fecha:'jun 03/06/2023',
        imagen: imagenArticulo3,
        parrafo1:'La Automatización Robótica de Procesos (RPA) es una tecnología innovadora que utiliza robots de software para automatizar tareas repetitivas en procesos empresariales. ',
        parrafo2:'La implementación de RPA ofrece numerosos beneficios para las organizaciones. En primer lugar, mejora la eficiencia al eliminar la necesidad de realizar tareas manuales y repetitivas. Esto permite a los empleados centrarse en actividades de mayor valor y aumenta la productividad general.Además, la RPA reduce el error humano al realizar tareas con precisión y consistencia. Los robots de software siguen las reglas y los procesos predefinidos, lo que garantiza una ejecución exacta y minimiza los errores. La RPA también brinda escalabilidad y flexibilidad, ya que los robots pueden adaptarse rápidamente a los cambios en los procesos y las demandas del negocio. Esto permite una respuesta ágil a las necesidades en constante evolución y una mayor capacidad de crecimiento.',
        parrafo3:'En resumen, la Automatización Robótica de Procesos (RPA) es una tecnología que automatiza tareas repetitivas, mejora la eficiencia, reduce los errores y proporciona escalabilidad y flexibilidad. Su implementación permite a las organizaciones optimizar sus procesos empresariales, liberar recursos y aumentar la productividad. La RPA se ha convertido en una herramienta valiosa para mejorar la eficiencia operativa y obtener una ventaja competitiva en el entorno empresarial actual.'
    }
]

export const Post = ({post}) => {
  return (
    <Box 
    ref={post}
        sx={{
            minHeight:'80vh',
        }}
    >
        <h1 style={{marginLeft:10}}>Ultimas tendencias</h1>
        <Box sx={{marginLeft:{xs:0,md:5}, display:'flex', flexDirection:{xs:'column',md:'row'}, flexWrap:'wrap', alignItems:'flex-start', justifyContent:'space-around'}}>
            {
                articulos.map((articulo) => {
                    return(
                        <CardComponent key={articulo.id} articulo={articulo}/>
                    )
                })
            }
            
        </Box>
    </Box>
  )
}
