<template lang="pug">
.curso-main-container.pb-3.tema1
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Nómina

    .fondo1
      p.mb-5 El talento humano podría considerarse como el más importante de los recursos de cualquier empresa, sin importar la actividad, sector o naturaleza de esta, siempre será necesario contar con empleados de todos los niveles jerárquicos para poder llevar a cabo todas las operaciones. Con el paso del tiempo, los procesos son cada vez más asistidos por sistemas informáticos o maquinaria automatizada; sin embargo, el papel de las personas como supervisores, ejecutores de tareas artesanales o directores de áreas no podrá ser reemplazado en el futuro próximo.

      .row.justify-content-center.mb-5(data-aos="fade-left")
        .col-lg-5.col-8
          img.mb-lg-0.mb-3(src="@/assets/curso/tema1/img01.png")
        .col-lg-5.col-12
          .cajon.color-acento-contenido.p-5.mb-0(style="background-color:#e1e4a8")
            p.mb-0 De igual manera, en el campo de la producción, existen cada vez más herramientas que requieren menos horas de trabajo, las líneas productivas suelen contar con maquinaria que opera en serie, de tal forma que las tareas repetitivas pasan a ser resueltas por equipos que siguen patrones; pero incluso en estos casos, la revisión de dichas máquinas y su programación estarán a cargo de ingenieros o personal experto que pueda dirigirlas según se requiera, esto necesariamente repercutirá en los costos de producción en las empresas.

      p.mb-0 Uno de los temas más álgidos a tocar es la nómina, que es el compendio de todos los empleados contratados por la empresa, en la que se listan todos los derechos económicos o en especie que les corresponden, así como las deducciones que se les deben practicar. Contar con un control claro sobre esta, permite conocer de primera mano la cuantía de cada uno de estos valores y así prever los recursos que será necesario entregar como contraprestación a las labores ejecutadas. 

      Separador

      #t_1_1.titulo-segundo.color-acento-contenido
        h2 1.1 Tipos de contrato

      img.mb-5(src="@/assets/curso/tema1/img02.png" data-aos="fade-right")

      p.mb-5 Para que los empleados sean considerados como tal, debe existir algún tipo de vinculación con la empresa soportada en un contrato que puede ser oral o escrito. Para que un acuerdo se pueda considerar un contrato de trabajo, la normativa ha previsto que se cumpla con los siguientes elementos:
      .fondo3.p-4.mb-5(data-aos="fade-left")
        SlyderA(tipo="b")
          .row.justify-content-center.px-0.py-3
            .col-lg-11.col-12
              .row.justify-content-center.py-4
                .col-lg-4.lg-12.pt-lg-4.pt-0
                  h4.mb-4 Ejecución de la labor de forma personal
                  p.mb-lg-0.mb-3 Implica que las tareas a desarrollar deben ser ejecutadas directamente por el trabajador, sin delegarlas a otras personas.
                .col-lg-8.lg-8
                  img.mb-5(src="@/assets/curso/tema1/img03.png")

          .row.justify-content-center.px-0.py-3
            .col-lg-11.col-12
              .row.justify-content-center.py-4
                .col-lg-4.lg-12.pt-lg-4.pt-0
                  h4.mb-4 Subordinación
                  p.mb-4 El empleado estará sometido a las órdenes de quien lo contrata, es decir, el empleador. Así, se configura la mecánica de jefe y empleado, en la que el primero, como contratante, tiene la autoridad para asignarle labores y responsabilidades al segundo. 
                  p.mb-lg-0.mb-3 Según la interpretación que los juristas les ha dado a las normas relacionadas, este es probablemente el elemento más diferenciador en los contratos de trabajo, puesto que se distancia de otros sistemas donde existe remuneración y ejecución personal de las tareas.
                .col-lg-8.lg-8
                  img.mb-5(src="@/assets/curso/tema1/img04.png")

          .row.justify-content-center.px-0.py-3
            .col-lg-11.col-12
              .row.justify-content-center.py-4
                .col-lg-4.lg-12.pt-lg-4.pt-0
                  h4.mb-4 Retribución                  
                  p.mb-4 Entendida como la contraprestación que recibe el empleado por llevar a cabo las labores que le son asignadas. 
                  p.mb-lg-0.mb-3 Es conocida como salario y comprende tanto el pago periódico, los beneficios asociables a este, como las prestaciones sociales.
                .col-lg-8.lg-8
                  img.mb-5(src="@/assets/curso/tema1/img05.png")

    .row.justify-content-center.mb-5
      .col-lg-10.col-12(style="background-color:#efe0e4; border-radius:20px")
        .row.justify-content-center.px-0.py-4
          .col-lg-3.col-8.d-flex.justify-content-center        
            img.mb-lg-0.mb-3(style="width:129px !important" src="@/assets/curso/tema1/img06.svg")
          .col-lg-9.col-12.d-flex.align-items-center
            p.mb-0 En este apartado resulta perentorio afirmar que, si se cumplen con estas condiciones se habla de un contrato de trabajo, incluso cuando los documentos que suscriben las partes indiquen otra cosa. Así, es común encontrarse con situaciones donde se manejan figuras como <b style="color:#6E2034">contratos de prestación de servicios para evitar los pagos adicionales que implican las relaciones laborales</b>; sin embargo, si el contratista (en este caso empleado) logra demostrar que se dieron estas condiciones, <b style="color:#6E2034">la ley puede obligar al contratante (o empleador) a que le reconozca los derechos laborales que omitió de forma retroactiva</b>.            
      
    p.mb-5 Teniendo claro lo que hace que un contrato se configure como laboral, es posible clasificarlo de acuerdo con las condiciones a partir de las cuales se llevarán a cabo las labores y por ello, el siguiente recurso presenta los tipos de contrato de esta naturaleza según el Ministerio del Trabajo:
    ImagenInfografica.color-acento-botones.mb-0
      template(v-slot:imagen)
        figure
          img.mb-0(src="@/assets/curso/tema1/img07.svg")          

      .div1.p-4(x="1.7%" y="77.4%" numero="+")
        .tarjeta.color-secundario.sombra1.p-3(style="background-color:#e8e8e8")
          p.mb-1 <b>Por obra o labor:</b>
          p.mb-0 Al momento de suscribir el contrato se acuerda que el trabajo finalizará una vez se culmine con una tarea determinada. Así, no se cuenta con una fecha en sí mismo, sino con un requisito para dar por cumplida la condición asociada con la duración del contrato.  Suele ser utilizado en obra civil, donde los empleados trabajarán hasta que se termine la obra o una etapa determinada, o en universidades o colegios, donde los docentes o personal administrativo trabajarán hasta la finalización del semestre o año escolar.

      .div1.p-4(x="22.15%" y="77.55%" numero="+")
        .tarjeta.color-secundario.sombra1.p-3(style="background-color:#e8e8e8")
          p.mb-1 <b>A término fijo: </b>
          p.mb-0 En este tipo de contrato se define la fecha de inicio y de terminación de este, el periodo comprendido entre ambas no puede superar los 3 años según la normatividad aplicable. Dadas sus características, debe constar por escrito. A pesar de que cuente con una fecha de finalización, este puede ser renovado hasta tres veces si su duración es inferior a un año y de forma indefinida si es igual o superior. En caso de no querer renovar es importante informar a la otra parte con suficiente antelación (30 días previos a la fecha de terminación) para que se tomen todas las medidas y se minimice el potencial impacto negativo. De no haber preaviso, el contrato se entenderá renovado de forma automática por el mismo término inicial o por un periodo de un año según el número de renovaciones a ese momento.

      .div1.p-4(x="42.45%" y="77.55%" numero="+" )
        .tarjeta.color-secundario.sombra1.p-3(style="background-color:#e8e8e8")
          p.mb-1 <b>A término indefinido: </b>
          p.mb-0 Se dan cuando una persona lleva a cabo la parte práctica de su formación en una empresa autorizada. Así, existe un contrato conveniente para ambas partes, puesto que la empresa cuenta con un empleado a un menor costo y el trabajador cumple con uno de los requisitos para poder obtener su titulación. La duración del contrato de aprendizaje no puede ser superior a dos años, mientras que la remuneración que recibe el empleado no puede ser inferior al 50% de un salario mínimo mensual legal vigente durante su etapa lectiva o del 75% durante la etapa práctica.

      .div1.p-4(x="63.6%" y="77.5%" numero="+")
        .tarjeta.color-secundario.sombra1.p-3(style="background-color:#e8e8e8")
          p.mb-1 <b>De aprendizaje: </b>
          p.mb-0 Se dan cuando una persona lleva a cabo la parte práctica de su formación en una empresa autorizada. Así, existe un contrato conveniente para ambas partes, puesto que la empresa cuenta con un empleado a un menor costo y el trabajador cumple con uno de los requisitos para poder obtener su titulación. La duración del contrato de aprendizaje no puede ser superior a dos años, mientras que la remuneración que recibe el empleado no puede ser inferior al 50% de un salario mínimo mensual legal vigente durante su etapa lectiva o del 75% durante la etapa práctica.

      .div1.p-4(x="84%" y="77.4%" numero="+")
        .tarjeta.color-secundario.sombra1.p-3(style="background-color:#e8e8e8")
          p.mb-1 <b>Temporal, ocasional o accidental: </b>
          p.mb-0 Es aquel contrato que se suscribe de forma transitoria o accidental, por lo que su duración no supera los 30 días. Al igual que en el contrato a término indefinido se puede dar de forma verbal. Adicionalmente, la actividad debe estar encaminada a situaciones ajenas a las normales que presta la empresa, es decir, no debe ser una tarea que la organización lleve a cabo de forma permanente. 
    
    
    

    .fondo2
      Separador.mb-5

      #t_1_2.titulo-segundo.color-acento-contenido
        h2 1.2 Normatividad ambiental 

      p.mb-5 Al ser el tema laboral un escenario tan complejo y lleno de múltiples posibilidades, el Estado ha tenido que reglamentarlo de forma extensa para evitar que se presenten situaciones que pongan en desventaja a los trabajadores. En este sentido, el empleado debe comprender a qué contribuciones tiene derecho, de la misma forma que el empleador debe comprender la totalidad de erogaciones para estimar de forma acertada el verdadero costo que acarrea cada persona contratada. 

      .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="fade-left")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/tema1/img08.png')})`}"
        )
        .bloque-texto-g__texto.p-4.py-5
          p.mb-5 La contraprestación recibida por el empleado con un contrato de trabajo se compone por los siguientes elementos:           
          br
          br
          .ul.lista-ul--color.mb-lg-0.mb-0.ms-lg-5.ms-0.d-block
                li.mb-2
                  i.fas.fa-check
                  | Salario básico. 
                li.mb-2
                  i.fas.fa-check
                  | Seguridad social. 
                li.mb-0
                  i.fas.fa-check
                  | Aportes parafiscales, así como cualquier otra retribución adicional que se pacte de común acuerdo, como bonificaciones, viáticos o pagos en especie. 
      p.mb-5 El mayor compilado de normativa laboral vigente en Colombia es el <b>Código Sustantivo del Trabajo</b>, sancionado en 1950 y modificado por una infinidad de leyes y decretos a lo largo del tiempo; es así, como a continuación se presentan los conceptos que resultan de mayor relevancia para comprender los elementos que acarrea la contratación laboral tradicional:

      AcordionA.mb-lg-0.mb-3(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
        div(titulo="Salario")
          .row.justify-content-center.px-lg-5.p-0
            .col-lg-6.col-8
              img.mb-lg-0.mb-3(src="@/assets/curso/tema1/img09.png")
            .col-lg-6.col-12
              p.mb-5 Constituye salario no solo la remuneración ordinaria, fija o variable, sino todo lo que recibe el trabajador en dinero o en especie como contraprestación directa del servicio, sea cualquiera la forma o denominación que se adopte, tales como:
              .ul.lista-ul--color.mb-lg-0.mb-0.ms-lg-5.ms-0
                li.mb-2
                  i.fas.fa-check
                  | Primas. 
                li.mb-2
                  i.fas.fa-check
                  | Sobresueldos. 
                li.mb-2
                  i.fas.fa-check
                  | Bonificaciones habituales.
                li.mb-2
                  i.fas.fa-check
                  | Valor del trabajo suplementario o de las horas extras.
                li.mb-2
                  i.fas.fa-check
                  | Valor del trabajo en días de descanso obligatorio. 
                li.mb-0
                  i.fas.fa-check
                  | Porcentajes sobre ventas y comisiones.
        div(titulo="Horas extra")
          .row.justify-content-center.px-lg-5.p-0
            .col-lg-6.col-8
              img.mb-lg-0.mb-3(src="@/assets/curso/tema1/img10.png")
            .col-lg-6.col-12
              p.mb-5 Trabajo suplementario o de horas extras es el que excede de la jornada ordinaria, y en todo caso el que excede de la máxima legal. 
              p.mb-0 (Código Sustantivo del Trabajo, 1950  Artículo 159).
        div(titulo="Vacaciones")
          .row.justify-content-center.px-lg-5.p-0
            .col-lg-6.col-8
              img.mb-lg-0.mb-3(src="@/assets/curso/tema1/img11.png")
            .col-lg-6.col-12
              p.mb-5 Los trabajadores que hubieren prestado sus servicios durante un año tienen derecho a quince días hábiles consecutivos de vacaciones remuneradas. 
              p.mb-0 (Código Sustantivo del Trabajo, 1950 Artículo 186).
        div(titulo="Cesantías")
          .row.justify-content-center.px-lg-5.p-0
            .col-lg-6.col-8
              img.mb-lg-0.mb-3(src="@/assets/curso/tema1/img12.png")
            .col-lg-6.col-12
              p.mb-5 Todo empleador está obligado a pagar a sus trabajadores y a las demás personas que se indican en este capítulo, al terminar el contrato de trabajo, como auxilio de cesantía un mes de salario por cada año de servicios y proporcionalmente por fracción de año. 
              p.mb-0 Código Sustantivo del Trabajo, 1950 Artículo 249).
        div(titulo="Prima de servicios ")
          .row.justify-content-center.px-lg-5.p-0
            .col-lg-6.col-8
              img.mb-lg-0.mb-3(src="@/assets/curso/tema1/img13.png")
            .col-lg-6.col-12
              p.mb-5 El empleador está obligado a pagar a su empleado o empleados, la prestación social denominada prima de servicios que corresponderá a 30 días de salario por año, el cual se reconocerá en dos pagos, así la mitad máximo el 30 de junio y la otra mitad a más tardar los primeros veinte días de diciembre. 
              p.mb-5 u reconocimiento se hará por todo el semestre trabajado o proporcionalmente al tiempo trabajado.
              p.mb-0 (Código Sustantivo del Trabajo, 1950 Artículo 306).
        div(titulo="Intereses a las cesantías ")
          .row.justify-content-center.px-lg-5.p-0
            .col-lg-6.col-8
              img.mb-lg-0.mb-3(src="@/assets/curso/tema1/img14.png")
            .col-lg-6.col-12
              p.mb-5 Todo patrono obligado a pagar cesantía a sus trabajadores conforme al Capítulo VII, Título VIII, Parte 1ª, del Código Sustantivo del Trabajo y demás disposiciones concordantes, les reconocerá y pagará intereses del 12% anual sobre los saldos que al 31 de diciembre de cada año o en las fechas de retiro del trabajador o de liquidación parcial de cesantía tenga este a su favor por concepto de cesantía. 
              p.mb-0 (Ley 52 de 1975, Artículo 1).
        div(titulo="Auxilio de transporte")
          .row.justify-content-center.px-lg-5.p-0
            .col-lg-6.col-8
              img.mb-lg-0.mb-3(src="@/assets/curso/tema1/img15.png")
            .col-lg-6.col-12
              p.mb-5 Corresponde a un elemento salarial diferente a los anteriores, puesto que su valor no depende del salario, sino que se establece un valor fijo anualmente. 
              p.mb-5 Como su nombre lo indica es un auxilio para cubrir los costos de desplazamiento del empleado.
              p.mb-0 Para el año 2022 su valor es de $ 117.452 según lo dispuesto en el Decreto 1785 de 2020, expedido por el Ministerio del Trabajo, y su pago es exclusivo de los trabajadores que devenguen menos de dos salarios mínimos mensuales legales vigentes (SMMLV).
        div(titulo="Aportes parafiscales ")
          .row.justify-content-center.px-lg-5.p-0
            .col-lg-6.col-8
              img.mb-lg-0.mb-3(src="@/assets/curso/tema1/img16.svg")
            .col-lg-6.col-12
              p.mb-5 Corresponden a pagos adicionales a entidades del Estado que cumplen con un carácter complementario para la atención de la población. 
              p.mb-0 En efecto, a partir del salario mensual se estiman tres tarifas y destinaciones distintas así: 4% para el pago de subsidio familiar, del 3% al Instituto Colombiano de Bienestar familiar y un 2% para el Servicio Nacional de Aprendizaje – SENA (Ley 21 de 1982 y Ley 27 de 1974).
        div(titulo="Seguridad social ")
          .row.justify-content-center.px-lg-5.p-0
            .col-lg-6.col-8
              img.mb-lg-0.mb-3(src="@/assets/curso/tema1/img17.svg")
            .col-lg-6.col-12
              p.mb-5 Comprende el pago de salud, pensión y riesgos laborales (ARL), los cuales son considerados aportes obligatorios para cualquier persona que perciba ingresos de manera permanente.
              p.mb-5 Según la normativa vigente, los aportes a salud corresponden hasta a un 12,5%, los de pensión alcanzan el 16% y los aportes a ARL a un 0.522 %. 
              p.mb-0 La base para calcular el pago será el salario base y con ello se garantiza el acceso al sistema contributivo de salud, a la atención en caso de afectaciones físicas o mentales producto de las tareas realizadas, y a una pensión por vejez o invalidez si hay lugar.  
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
