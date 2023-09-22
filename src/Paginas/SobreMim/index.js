import styles from './SobreMim.module.css'

import PostModelo from "componentes/PostModelo";
import fotoCapa from 'assets/sobre_mim_capa.png';
import fotoSobreMim from 'assets/sobre_mim_foto.png';

function SobreMim() {
  return (
    <PostModelo 
      fotoCapa={fotoCapa} 
      titulo='Sobre mim'
    >
      <h3 className={styles.subtitulo}>
        Olá, eu sou o Gabriel Vieira!
      </h3>

      <img 
        className={styles.fotoSobreMim}
        src={fotoSobreMim}
        alt='Foto do Gabriel Tocando'
      />

      <p className={styles.paragrafo}>
        Oi, tudo bem? Eu sou estudante em Front-end na Alura e estou feliz de te ver por aqui.
      </p>

      <p className={styles.paragrafo}>
        Minha história com a programação começou quando um amigo meu me explicou como que é a área, os salários e o quanto seguir na área de TI seria vantajoso pra mim. Naquela conversa eu decidi me dedicar aos estudos, realmente ver como que era, se eu iria gostar. Com isso me dediquei, eu trabalhava em uma empresa das 10:00 ás 17:00 e a noite tinha que ir para a escola, resolvi então acordar mais cedo, e com o pouco tempo que eu tinha eu tava ali estudando lógica de programação com o Gustavo Guanabara do Curso em Video. 
      </p>
      <p className={styles.paragrafo}>
        Um dia eu estava no horário de trabalho quando esse meu amigo me mandou uma menssagem falando que conversou com uma amiga e que ao falar com essa amiga ele conseguiu uma indicação para um programa na empresa Fasters. Isso me deixou muito alegre! foi ai que realmente decidi me dedicar ainda mais. Final do ano de 2022 eu estava no cabeleleiro quando recebo a mensagem da empresa falando que eu iria participar dos processos seletivos da empresa em Janeiro de 2023, Naquela hora fiquei mais feliz ainda :)
      </p>

      <p className={styles.paragrafo}>
        Tinha 4 fases eliminatórias, eu passei na primeira que foi de lógica de programação. Nesse momento eu ainda estava trabalhando e sabia que iria ficar apertado, eu precisava de mais tempo para estudar e passar nas fases eliminatórias. Com isso decidi sem medo de ser feliz, sair da empresa que eu tava trabalhando (eles estavam a ponto de me efetivarem) e assim eu fiz! Comecei a estudar de segunda a sexta agora sem parar, era muito video do Guanabara que eu via Hahahah, que tempo bom! A empresa tinha passado 4 módulos de HTML e CSS do curso em video, para que a gente se preparasse para o segundo desafio.
      </p>

      <p className={styles.paragrafo}>
        O segundo desafio, era colocar tudo em prática que a gente tinha aprendido em um site da Netuno, que era o nome do projeto da empresa. Confesso que foi dificil, enquanto desenvolvia eu tinha muitas dúvidas, mais mesmo assim fui fazendo com o conhecimento que eu tinha. Até que fiquei orgulhoso, porque pra um menino que nunca tinha programado, conseguir fazer um site daqueles dando o seu melhor (por mais que tivesse algumas gambiarras hahaha) eu fiquei feliz, esse desafio me fez aprender muito.
      </p>

      <p className={styles.paragrafo}>
        Eu acabei não passando, e também tive um feedback do desenvolvedor que avaliou meu código. Isso foi muito bom pois eu acabei me fortificando e melhorando mais e mais. Continuei estudando sozinho, mais chegou um tempo que eu vi que eu precisava investir em um Curso, então eu escolhi a Alura, e tenho aprendido bastante nesse tempo, e não me arrependo, em breve eu creio que vou estar empregado, e o caminho é esse! é dificil, mais vai valer a pena.
      </p>

    </PostModelo>
  )
}

export default SobreMim;