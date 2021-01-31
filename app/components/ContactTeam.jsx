import React, {Fragment}  from 'react';
import {
  Link,
} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import {
  StyledTitle,
  StyledText,
  StyledTableTitle,
  StyledShortUnderline,
  StyledCenteredActionButton,
  StyledLinkText,
} from './program.styles';

import Modal from 'react-modal';
import { ModalProvider, ModalConsumer } from './ModalContext';
import ModalRoot from './ModalRoot';

import AssetStore from '../../lib/AssetStore';



const box = {
	border: 'none' 
};


const resetModalStyle = {
  content : {
	textAlign: 'left',
	width: '40%',
	height: '55%',
  left: '25%',
  padding: '5%'
  }
};
	  

export default class ContactTeam extends React.PureComponent {

  render() {
	  
  
const Modal1 = ({ onRequestClose, ...otherProps } ) => (
  <Modal isOpen onRequestClose={onRequestClose} {...otherProps} style={resetModalStyle}>
   <div><h1>Der-lin Chao, PI and Project Director </h1>
              <p>
               Dr. Chao is Professor and Head of Chinese Program at Hunter College since 1998. She holds a Ph.D. in Applied Linguistics from New York University. In addition to teaching and research, Dr. Chao has extensive experience in managing federally funded projects. She received a U.S. Department of Education Instructional Research Studies grant to develop multimedia Chinese literacy instructional materials in 2001. Dr. Chao has directed STARTALK summer student and teacher programs since 2007. In 2017 she received STARTALK infrastructure grants to develop curricula and materials to promote blended learning, and in 2018, grants to develop a Guide on how to ensure K16 curricular articulation. Dr. Chao has been the Director of the Chinese Flagship program since 2011 and received Flagship funding to implement projects including the teacher training workshops for Flagship and Project Go teachers (2014), the Flagship K-12 blended learning pilot project (2015 to 2017), and the Global Linkage project (2018 to 2020).
              </p>
            </div>
		   <button  onClick={onRequestClose}>close</button>
  </Modal>
);

const Modal2 = ({ onRequestClose,  ...otherProps }) => (
  <Modal isOpen onRequestClose={onRequestClose} {...otherProps} style={resetModalStyle}>
   <div>
              <h1>Temp Name</h1>
              <p>
		Temp Bio

              </p>
 </div>
		   <button  onClick={onRequestClose}>close</button>
  </Modal>
);
	  
const Modal3 = ({ onRequestClose,  ...otherProps }) => (
  <Modal isOpen onRequestClose={onRequestClose} {...otherProps} style={resetModalStyle}>
   

<div>
              <h1>Meei-yuan Fann, Resident Life Director/Faculty</h1>
              <p>
				Ms. Meei-yuan Fann received an M.A. degree in Teaching Chinese as a Second Language from National Taiwan Normal University. She has served as Director of Student Affairs at ICLP since 2015 where she designed and coordinated student activities, advised students on study plans and proficiency assessment preparation, and provided student counselling. Ms. Fann is a teacher training specialist and taught in the Teacher Training and Pedagogy program since 2002 at NTU. She was a visiting instructor at Oberlin College and University of Minnesota. She served as a reviewer for the Fulbright Foreign Language Teaching Assistant (FLTA) program. She was an online Chinese language proficiency test writer for the Overseas Chinese Affairs Commission, and both wrote and graded a section of the  Chinese Teaching Certification Exam of the Ministry of Education. She also served as a reviewer of the revised edition of Practical Audio-Visual Chinese for the Ministry of Education. Ms. Fann compiled instructional materials for advanced learners. She was the coordinator and curriculum developer for the Chinese Language Training for New Zealand’s Diplomatic Service at ICLP from 2009 to 2014. She was also the coordinator for the summer Flagship program at ICLP in 2013 and 2015.

              </p>
		</div>    <button  onClick={onRequestClose}>close</button> </Modal>
	);
	  
const Modal4 = ({ onRequestClose,  ...otherProps }) => (
  <Modal isOpen onRequestClose={onRequestClose} {...otherProps} style={resetModalStyle}>
  
	 <h1>Chuan-juan Huang, Internship Coordinator/Faculty
</h1>
              <p>
				  Ms. Chuan-juan Huang received her B.A. in Journalism and Broadcasting from Shih Hsin University in 1996. She started her teaching career at ICLP in 2000. Due to her outstanding performance, she was promoted to Chief Instructor and Deputy Director of Academic Affairs in 2009. In addition to teaching at ICLP, she also taught in the Teacher Training and Pedagogy Program at NTU. She has served as program coordinator for the UC Berkeley Business Chinese Summer Training Course and the UC Santa Barbara program. Ms. Huang has also provided internship counseling and has worked as a co-coordinator for internships. She also authored the curricula for several language textbooks, including News & Views, Business Topics (Vol. 1 and Vol. 2), Situational Chinese 600 Phrases (Shopping and Eating Out), and TV News. Ms. Huang holds the Teaching Chinese as a Foreign Language Certification from the Taiwan Ministry of Education.

		</p>   <button  onClick={onRequestClose}>close</button> </Modal>	
	
);
		
const Modal5 = ({ onRequestClose,  ...otherProps }) => (
  <Modal isOpen onRequestClose={onRequestClose} {...otherProps} style={resetModalStyle}>
   
		 <h1>Alice Wu, Academic Coordinator/Faculty </h1>
              <p>
				  Alice Wu is the Academic Coordinator for the Chinese Overseas Flagship Center in Taiwan, where she is responsible for arranging classes, supervising students’ academic progress, and mentoring teachers. Ms. Wu has had been an educator for over thirty years in the US and Taiwan, including teaching at IUP and Taipei American School.

				  Ms. Wu received her B.A. from National Taiwan University, and a certificate in English from Stanford University, where she was awarded Student of the Year. Alice is a regular columnist for the Hope Cancer Society Journal and has been a contributing author for a book. Ms. Wu has also supported several non-profit organizations, including serving as the Vice President for the Taiwan Lymphoma Society.  In her free time, Alice enjoys writing, the ballet, traveling, playing badminton, and reading.

              </p>
	
	   <button  onClick={onRequestClose}>close</button>
		</Modal>  
	  );
	  

	

const Modal6 = ({ onRequestClose,  ...otherProps }) => (
  <Modal isOpen onRequestClose={onRequestClose} {...otherProps} style={resetModalStyle}>
		
		 <h1>Rita Chen, Program Coordinator
</h1>
              <p>
				  Rita Chen is from Taiwan, and she received her M.A. in Second Language Teaching (Chinese emphasis) and B.A. in English Language from Brigham Young University. Her research interests include sociolinguistics, Chinese corpora, discourse analysis, and language testing. She has taught Chinese at all levels at Brigham Young University and two different Chinese Flagship Centers. 

              </p>
		
	
		   <button  onClick={onRequestClose}>close</button>
	</Modal> 	
	  );  
	  
	  
	const Modal7 = ({ onRequestClose,  ...otherProps }) => (
  <Modal isOpen onRequestClose={onRequestClose} {...otherProps} style={resetModalStyle}>
   
		
		 <h1>Pei-ling Liao, Program Manager </h1>
              <p>
				  Ms. Pei-ling Liao obtained a B.A. in Management and International Business from Ming Chuan University in 2009. After graduation, she served as a secretary to an American CPA at Ernst & Young Global Limited (Taipei) for two years. She then worked at National Taiwan University’s international student housing office as a student supervisor for seven years. In this capacity, Pei-ling was in charge of the public safety of the dorm. She handled student emergency situations, maintenance of the dorm facilities, and organized cultural events for students. In addition, she managed accounts, payment requests, and invoicing. She is also certified as a procurement specialist. Pei-ling has an outgoing personality. She looks forward to working in the COF in Taiwan.

              </p>
		
	   <button  onClick={onRequestClose}>close</button>
	</Modal> 	
	  );   
	  
	
	 const Modal8 = ({ onRequestClose,  ...otherProps }) => (
  <Modal isOpen onRequestClose={onRequestClose} {...otherProps} style={resetModalStyle}>
   
	  <h1>Sam Maser, Project Coordinator </h1>
              <p>

			Ms. Maser holds a B.A., with a concentration in writing, literature, and film, from Sarah Lawrence College. Most recently Ms. Maser was the Associate Head of Communication for The Studio School in New York City, where she handled all internal and external written communications. Prior to that, she was the Program Director for a number of film festivals and screening series (including the London Jewish Film Festival, the Hamptons International Film Festival, and the Tribeca First Look Film Series), and consulted to a number of other international independent film festivals. Ms. Maser has also worked extensively as a writer, editor, and proofreader, for companies including Oxford University Press, Cooper-Hewitt National Design Museum, DBI Connect, and others, as well as for numerous private clients. When not working, she loves to knit and to read, and has volunteered many hours to raise money for and improve the libraries at her daughter’s school.

              </p>	
	   <button  onClick={onRequestClose}>close</button>
		
	</Modal> 	
	  );   
	  
	  
	 const Modal9 = ({ onRequestClose,  ...otherProps }) => (
  <Modal isOpen onRequestClose={onRequestClose} {...otherProps} style={resetModalStyle}>
   
	  <h1>Bing Ying Hu, Academic Liaison</h1>
              <p>
				 Ms. Hu has an M.A. in the Teaching of Chinese degree from Hunter College. She also holds a Grades 7-12 New York State Chinese Teacher Certification. Ms. Hu is a tenured lecturer at Hunter College and has been the curriculum coordinator for the Hunter Chinese Flagship since 2011. In addition to teaching undergraduate courses, she is the instructor for the teaching practicum course in the M.A. in the Teaching of Chinese program and serves as a field supervisor. Ms. Hu is active in the development and research in K-16 teaching and learning. She was the Assistant Director of the Flagship K-12 Blended Learning Pilot Project (2015-2017) and holds assistant directorship for the Global Linkage Project (2017-2018). In these projects, she focuses on using proficiency-based curriculum and the blended learning (combining face-to-face and online teaching) approach. In addition, she led the professional development workshops to provide one-on-one online instruction to Grades K-16 students.

              </p>	
		   <button  onClick={onRequestClose}>close</button>
	
	</Modal> 	
	  );     

	  
 const Modal10 = ({ onRequestClose,  ...otherProps }) => (
  <Modal isOpen onRequestClose={onRequestClose} {...otherProps} style={resetModalStyle}>
   
	 <h1>Bo Hao, Assessment Liaison</h1>
              <p>
				  Mr. Bo Hao has an M.A. in the Teaching of Chinese from Hunter College and holds a Grades 7-12 New York State Chinese Teacher Certification. He is a tenured lecturer at Hunter College. A certified OPI tester, Bo has served as the assessment coordinator for Hunter Chinese Flagship program since 2011. In addition, he is an adviser for the M.A. Teacher Education program. Bo is an expert in proficiency-based instruction to push students from intermediate level to advanced and superior levels. He conducted numerous professional development workshops at Hunter and other institutions. He frequently delivers presentations on this topic at national conferences. In addition to the undergraduate program, Bo teaches courses in the M.A. program and serves as a field supervisor for teaching practicum. Bo was the lead teacher for Hunter College's STARTALK student programs for three years and is currently the lead teacher for the teacher program.

              </p>	
		    <button  onClick={onRequestClose}>close</button>
		
	</Modal> 	
	  );   	 
	  
	  
 const Modal11 = ({ onRequestClose,  ...otherProps }) => (
  <Modal isOpen onRequestClose={onRequestClose} {...otherProps} style={resetModalStyle}>
 
		 <h1>Ming-Ying Li, Direct Enrollment and Internship Liaison </h1>
              <p>
				  Dr. Li holds a Ph.D. degree in Curriculum and Instruction with an emphasis in Language, Culture and Society from Pennsylvania State University. Before coming to Hunter College, she taught Chinese language courses at Pennsylvania State University and University of Colorado Boulder. At Hunter College since 2017, she co-designed and taught an innovative course Chinese for the Global Workforce funded by City University of New York (CUNY) to combine advanced-level language studies with internship opportunities. In addition to teaching, she serves as the outreach coordinator for the Hunter Chinese Flagship program. With a strong research background, Dr. Li is key in supervising undergraduate Flagship students’ honors theses and graduate-level research projects for M.A. students. Her primary research area is teaching and learning Chinese as a heritage language with a focus on literacy development. She collaborated with the National Language Resource Center at CUNY to study writing proficiency outcomes and characteristics of college-level Chinese heritage learners.
              </p>
		   <button  onClick={onRequestClose}>close</button>
	
	</Modal> 	
	  );  
	  
	  
 const Modal12 = ({ onRequestClose,  ...otherProps }) => (
  <Modal isOpen onRequestClose={onRequestClose} {...otherProps} style={resetModalStyle}>
 
			  
              <h1>Chi-hsuan Catterson (U.S.A.)
</h1>
              <p>
				  Ms. Catterson earned her Master’s degree in East Asian Languages and Literature from the University of Hawai’i at Manoa. She specialized in teaching Chinese as a second language. She also has an M.A. in English as a Second Language from the University of Hawai’i at Manoa, and a B.A. from National Taiwan Normal University in Taiwan. Zou Laoshi, as she is referred to by her students, started the Chinese program at the University of North Georgia in 2006. Her success in encouraging students to continue their Chinese studies led to the creation of the minor in 2007, and later, the Chinese major in 2010. In the summer of 2008, she inaugurated the first Summer Language Institute and taught in the program every summer until 2014. In 2017, Zou Laoshi assumed the role of Academic Director of the Chinese Flagship Program at UNG.

              </p>
		   <button  onClick={onRequestClose}>close</button>
	
	</Modal> 	
	  );   
	  
	  
 const Modal13 = ({ onRequestClose,  ...otherProps }) => (
  <Modal isOpen onRequestClose={onRequestClose} {...otherProps} style={resetModalStyle}>
 
		
	  <h1>Yea-Fen Chen (U.S.A.)
</h1>
              <p>
				  Professor Yea-Fen Chen is the director of the Indiana University Chinese Flagship Center and former Executive Director of the Chinese Language Teachers Association (US). She has been teaching Mandarin Chinese since 1989. She holds a Ph.D. in Foreign Language Education and an M.A. in Applied Linguistics from Indiana University Bloomington, and co-authored four Chinese language textbooks including Integrated Chinese Level 1 and Chaoyue: Advancing in Chinese: A Textbook for Intermediate to Preadvanced Students. She has been an AP Chinese Language and Culture Course and Exam consultant for the College Board since 2006. She was the coordinator of the Chinese Program and the Asian Studies Certificate Program at the University of Wisconsin-Milwaukee before joining Indiana University in 2013.


              </p>	
		
	   <button  onClick={onRequestClose}>close</button>
		
	</Modal> 	
	  );   	  
	  
	  
 const Modal14 = ({ onRequestClose,  ...otherProps }) => (
  <Modal isOpen onRequestClose={onRequestClose} {...otherProps} style={resetModalStyle}>
  
	  <h1>Charles Egan (U.S.A.)
</h1>
              <p>
				   Charles Egan (B.A., Yale; Ph.D., Princeton) is professor of Chinese and chair of the Department of Modern Languages and Literatures at San Francisco State University. He has also served as director of the SF State Chinese Flagship Program since its founding in 2009. He has published extensively on the evolution of Chinese classical poetic genres and is a frequent translator. His book, Clouds Thick, Whereabouts Unknown: Poems by Zen Monks of China (Columbia University Press), was awarded the 2011 Lucien Stryk Prize in Asian Translation by the American Literary Translators Association. Currently he is preparing a new anthology of inscriptions and poetry from or about the Angel Island Immigration Station in San Francisco Bay.


              </p>	
		
		   <button  onClick={onRequestClose}>close</button>
		
	</Modal> 	
	  );   	 
	  
	  
 const Modal15 = ({ onRequestClose,  ...otherProps }) => (
  <Modal isOpen onRequestClose={onRequestClose} {...otherProps} style={resetModalStyle}>
		
		
              <h1>Madeline Spring (U.S.A.)
</h1>
              <p>
				 Before going to the University of Hawaii, Manoa in the Fall 2014, Dr. Spring was at Arizona State University (ASU), where she served as director of the Chinese Language Flagship and the Chinese Flagship/ROTC Pilot Program, as well as director of the Chinese language program. Previous to that time, she taught at the University of Colorado, Boulder, where she was also director of the Chinese language program. Her research interests are divided between medieval Chinese literature (especially Six Dynasties to Tang prose and rhetoric) and (TCFL). In that area, her focus is on curricular design and implementation, content-based instruction, intercultural communicative competence (ICC), online communities, dual language immersion, and other topics related to guiding students toward Superior Level language proficiency. Dr. Spring has played a leadership role in defining and disseminating information about Chinese Language Flagship programs both nationally and internationally. She has also developed models for collaboration between the Language Flagship, The Language Flagship Technology Innovation Center, State Departments of Education, and faculty and students K-16 in university-level Chinese programs, and in other academic departments and units across campuses.

              </p>
		   <button  onClick={onRequestClose}>close</button>
		
	</Modal> 	
	  );   	  
	  
	  
 const Modal16 = ({ onRequestClose,  ...otherProps }) => (
  <Modal isOpen onRequestClose={onRequestClose} {...otherProps} style={resetModalStyle}>
 
		  <h1>Chun-Yi Peng (U.S.A.)
</h1>
              <p>
				   Dr. Chun-Yi Peng is Assistant Professor of Chinese at Borough of Manhattan Community College (BMCC). Prior to joining BMCC, Dr. Peng taught Chinese and linguistics courses across CUNY campuses, including Introduction to Language (LaGuardia Community College), Language, Culture and Society (New York City College of Technology), and Languages and Dialects in the United States (The City College of New York). Dr. Peng's research interest is in the fields of sociolinguistics and linguistic anthropology. His most recent article "Mediatized Taiwan Mandarin" will appear in Chinese Language and Discourse.



              </p>
		
	   <button  onClick={onRequestClose}>close</button>
		
	</Modal> 	
	  ); 
	  
	  
	  
 const Modal17 = ({ onRequestClose,  ...otherProps }) => (
  <Modal isOpen onRequestClose={onRequestClose} {...otherProps} style={resetModalStyle}>
 
		
	    <h1>Shih-Chang Hsin (Taiwan)
</h1>
              <p>
				  Professor Shih-Chang Hsin has been the Senior Vice President of National Tsing Hua University in Taiwan since 2016 and Professor at the Chinese Language Center at the same university. He was a Professor in the Graduate Institute of Teaching Chinese as a Second Language of National Taiwan Normal University since 1995 and Chair during 2001-2007. He served as President of Taiwan Association of Teaching Chinese as a Second Language during 2007-2010. He was a Visiting Scholar at the Department of East Asian Languages and Civilizations at Harvard University in 2004 and a Visiting Professor at the Free University of Berlin in Germany in 2009. Professor Hsin obtained his B.A. from the Department of Chinese Literature and Language at  National Taiwan Normal University, and his M.S. and Ph.D. in Instructional Systems Technology at Indiana University-Bloomington, USA. His research interests include Chinese language teaching, distance education, computer-mediated learning, language policy and Chinese heritage education.

              </p>	
	
		   <button  onClick={onRequestClose}>close</button>
	</Modal> 	
	  );   	  
	  
	  
	  
 const Modal18 = ({ onRequestClose,  ...otherProps }) => (
  <Modal isOpen onRequestClose={onRequestClose} {...otherProps} style={resetModalStyle}>
  
		  <h1>Chen-ching Li (Taiwan) </h1>
              <p>
				  Dr. Chen-ching Li received his doctoral degree in linguistics from the University of Hawaii, and is now Professor Emeritus of the English Department, Shih Hsin University, Taiwan. He was Dean of the College of Humanities and Social Sciences, Shih Hsin University from 2003 to 2006. Currently, he serves as Consultant to the Taiwan’s Ministry of Education. He has also been appointed as the coordinator of the “Chinese-English Terminology Translation Committee” of the National Academy for Educational Research. As a popular speaker, Professor Li has delivered numerous lectures in Taiwan, Europe, and the United States on language education, language skills development, language and culture, translation and interpreting, cross-cultural communication strategies, and international education policies. He has published ten books and three hundred English and Chinese articles on linguistics and language teaching, as well as in his other areas of interest, which include Chinese culture, creeds, philosophy, and literary writings.

              </p>
   <button  onClick={onRequestClose}>close</button>
		
	</Modal> 	
	  );   	
	  
	  
	  
 const Modal19 = ({ onRequestClose,  ...otherProps }) => (
  <Modal isOpen onRequestClose={onRequestClose} {...otherProps} style={resetModalStyle}>
   
		 
              <h1>Shou-Hsin Teng (Taiwan)</h1>
              <p>
				  Professor Shou-Hsin Teng is a Professor in the Department of Teaching Chinese as a Second Language at Chung Yuan Christian University in Taiwan and Professor Emeritus in the Department of Chinese as a Second Language at National Taiwan Normal University. He received his doctoral degree in linguistics at the University of California, Berkeley in 1973. During the following years, he was a tenured professor at the University of Massachusetts, Amherst where he taught Chinese language and linguistics. In 1995, he moved on to establish the first graduate degree program of Teaching Chinese as a Second/Foreign Language at National Taiwan Normal University. Professor Teng has published numerous highly influential books and articles. His exceptional academic accomplishments won him the prestigious Walton Lifetime Achievement Award from the Chinese Language Teachers Association in 1999. His recent publications include A Pedagogical Grammar of Chinese as a Second Language in 2010, Studies on Modern Chinese Syntax in 2012, and An A to Z Grammar for Chinese Learners in 2018.


              </p>
		
	   <button  onClick={onRequestClose}>close</button>
		
	</Modal> 	
	  );
	  
	  
	  
 const Modal20 = ({ onRequestClose,  ...otherProps }) => (
  <Modal isOpen onRequestClose={onRequestClose} {...otherProps} style={resetModalStyle}>
  
		 
              <h1>Teh-ming Yeh (Taiwan)</h1>
              <p>
				  Professor Ten-ming Yeh is the Professor Emeritus in the Department of Chinese as a Second Language at National Taiwan Normal University. She received her M.A. in linguistics at San Diego State University. She served as Director of the Mandarin Training Center at National Taiwan Normal University (1989-1997), President of the Association of Teaching Chinese as a Second Language in Taiwan (2011-2014), Visiting Associate Professor at San Diego State University (1979-1980), and Visiting Professor at Williams College in 1997. Professor Yeh’s expertise lies especially in pedagogy of teaching Chinese as a second language (CSL). She has taught all areas of CSL including Chinese Language Teaching Methodology and Materials, Studies in Phonetics Instruction in Chinese, Psychology of Chinese Reading, Bilingual Education, and Practice in Mandarin Pronunciation Pedagogy.

              </p>
		
	   <button  onClick={onRequestClose}>close</button>
		

  </Modal>
   );  
  
  const Modal21 = ({ onRequestClose,  ...otherProps }) => (
    <Modal isOpen onRequestClose={onRequestClose} {...otherProps} style={resetModalStyle}>
     
      <h1>William A. Stanton, Director of NYMU Flagship Project </h1>
             
              <p>
              National Yang-Ming University appointed William A. Stanton as a Vice President on August 16, 2019. He earlier served from August 2017 to July 2019 as a Professor at the Center for General Education at National Taiwan University. Dr. Stanton
also worked for four years as the George K.C. Yeh Distinguished Chair Professor and founding director of the Center for Asia Policy at National Tsing Hua University (NTHU). From October 2014 through January 2016, he was also NTHU’s Senior Vice
President for Global Affairs. Please read about his wealth of experience in foreign relations  <a href="https://nymu-e.ym.edu.tw/files/13-1134-41038.php"> here. </a>
             
</p>

<button  onClick={onRequestClose}>close</button>
       
      
    </Modal> 	
      );  


const Modal22 = ({ onRequestClose,  ...otherProps }) => (
        <Modal isOpen onRequestClose={onRequestClose} {...otherProps} style={resetModalStyle}>
         
          <h1>April Liu, Resident Director </h1>     
                     <p>
                     Liu Laoshi has an M.A. in Drama and Theatre Education from the University of Warwick, and she received her B.A. in Teaching Chinese as a Second Language from Chuong Yuan University. She holds a 2009 Certification of Proficiency in Teaching Chinese as a Second Language, and also in 2007 obtained Certification of Putonghua Proficiency.     
       </p>
       
       <p>
       After Liu Laoshi completed her graduate degree, she undertook editing the achievement test for students at National Taiwan Normal University in the Mandarin Training Center, and then worked for six years at the Ministry of Education. At the Ministry, she was responsible for the support, administration, and organization of a wide variety of tasks for the overseas Mandarin education department, such as helping schools looking for cooperation opportunities, formulating a cooperation contract between schools, and implementing key performance metrics at work, and more. 

       </p>


       <p>
       From her professional experiences, Liu Laoshi is now equipped with a strong teaching background and insight into the policies behind the Taiwanese educational system. She is familiar with labor regulations and the job market in Taiwan. Combining her background knowledge with her teaching and work experience, she will be an effective Resident Director, capable of helping Capstone students with any issues that might arise.   
         </p> 
    <button  onClick={onRequestClose}>close</button>
          
        </Modal> 	
          );  

      
  const Modal23 = ({ onRequestClose,  ...otherProps }) => (
            <Modal isOpen onRequestClose={onRequestClose} {...otherProps} style={resetModalStyle}>
             
              <h1>Yen-Ting Liu, Full-time Faculty </h1>
                     
                      <p>
                      Liu Laoshi has an M.A. in Teaching Mandarin as Foreign Language from National
Tsing Hua University. Her thesis focused on the understanding of Chinese 4-character idioms. While she was obtaining her M.A., Liu Laoshi interned at the
Chinese Flagship program at Western Kentucky University (2016-2017). After
receiving her M.A., she went to Russia as a full-time undergraduate Chinese
instructor at the Samara Branch of Moscow City Pedagogical University for two
years. She also has experience working at intensive summer programs, like CLS and
TISLP in Tainan in 2018, and Princeton in Beijing in 2019.
        </p>
        
               
        <button  onClick={onRequestClose}>close</button>
              
            </Modal> 	
              );  

              
      const Modal24 = ({ onRequestClose,  ...otherProps }) => (
        <Modal isOpen onRequestClose={onRequestClose} {...otherProps} style={resetModalStyle}>
         
          <h1>Shan-yu Guo, Full-time Faculty </h1>
                 
                  <p>
                  Guo Laoshi has an M.A. in Teaching Chinese as a Second Language from Chinese
Culture University. She was a Lecturer in the Department of Sinology at Charles
University in Prague (2016-2020). Before she was hired by Charles University, she
was employed at National Chengchi University (2008-2016) and CIEE Taiwan (2010-
2016). At that time, Guo Laoshi was in charge of Chinese and Business Chinese
classes, teaching students from the beginner to the advanced level. At the same
time, she worked for the International Han Institute (2012-2016) as a tutor,
providing prospective Chinese teachers with specialized professional training in
Teaching Chinese as a Second Language.
    </p>
    
           
    <button  onClick={onRequestClose}>close</button>
          
        </Modal> 	
          );  



  const Modal25 = ({ onRequestClose,  ...otherProps }) => (
            <Modal isOpen onRequestClose={onRequestClose} {...otherProps} style={resetModalStyle}>
             
              <h1>Zhi-Shiang Yang, Internship Coordinator </h1>
                     
                      <p>
                      Mr. Yang graduated from the Department of Chemistry and has an M.A. of Science in Life Sciences from Tamkang University.
        </p>
        
        <p>
                  Mr. Yang’s first job was as an Environmental Engineering Consultant at the Environmental
          Protection Administration Executive Yuan (EPA), where he was responsible for implementing
          various projects. In addition to writing reports, he also executed reports and assisted the EPA to
          supervise factories. His next position was as a Project Specialist in an emerging industry: Plant
          Factories. His main responsibilities involved factory establishment, including management of setting
          up a new office, as well as brand marketing and application of agricultural products. He has also
          helped friends to start a new business, a soymilk store, where he worked on the execution and
          planning in the areas of marketing, administration, and human resources. Mr. Yang's broad range of experience and ability to think outside of the box will  help him to coordinate official, university, and business resources in Taiwan, in order to best assist Capstone students to obtain well-matched internships.
                  </p>
        <button  onClick={onRequestClose}>close</button>
              
            </Modal> 	
              ); 
	
  const Modal26 = ({ onRequestClose,  ...otherProps }) => (
            <Modal isOpen onRequestClose={onRequestClose} {...otherProps} style={resetModalStyle}>
             
              <h1>Yun-Wen Su, Full-time Faculty </h1>
                     
        
        <p>
                  Su Laoshi has an M.A. in Teaching Chinese as a Second Language from National Taiwan Normal University. She was a Mandarin teacher at National Taipei University of Technology (2020), and Singapore National Academy in Surabaya Indonesia (2018-2019). Su Laoshi holds the Certification of Proficiency in Teaching Chinese as a Second Language and the teacher certificate for Scouting education and History education. She also has experience teaching children, teenagers, adults and in online teaching. She has taught in Taipei Municipal Dong-Hu Junior High School (2016-2018), and did teaching internships at Kang Chiao International School (2020), Taipei European School (2018), Taipei American School (2017-2018), and University of Texas at Arlington (2014).
                  </p>
        <button  onClick={onRequestClose}>close</button>
              
            </Modal> 	
              ); 	

    const Modal27 = ({ onRequestClose,  ...otherProps }) => (
            <Modal isOpen onRequestClose={onRequestClose} {...otherProps} style={resetModalStyle}>
             
              <h1>Po-Chung Lin, Student Housing Coordinator </h1>
                     
        
        <p>
                  Mr. Lin has an M.A. in linguistics from National Chengchi University. His thesis research was on Chinese near-synonyms. He has been teaching English as a Foreign Language at Chinese Culture University, National Taiwan Normal University, National Taiwan University, and Tamkang University. Mr. Lin is also a Chinese/English translator. From 2016 to 2019, he was on the editorial board for the Bilingual Vocabulary Translation Council at the National Academy for Educational Research. Mr. Lin’s main duty at the Taiwan Center is to oversee students’ housing issues, including developing a host family program. In addition, the Center will draw on Mr. Lin’s expertise in Chinese/English translation and language teaching skills. 
                  </p>
        <button  onClick={onRequestClose}>close</button>
              
            </Modal> 	
              ); 
          

//end new
  return (
      <div className="home-section-info" style={{ textAlign: 'center',}} >
        <div className="home-section-info-wrapper"  style={{ textAlign: 'center',}}>
          <div className="section-container"  style={{ textAlign: 'center',}}>


            <StyledTitle>
              Meet our Team
            </StyledTitle>

	    <center> Click on the photos to view our bios! </center>
			
			<br/>  
            <StyledTableTitle>
              Project Directors
            </StyledTableTitle>
            <StyledShortUnderline  style={{ display: 'inline-table', }} />
            <br />



<ModalProvider>
    <ModalRoot />
    <ModalConsumer>
      {({ showModal }) => (
        <Fragment>


           <Grid
              container
              justify="center"
              alignItems="center"
              spacing={15}
            >
              <Grid
                item
                xs={12}
                sm={4}
              >

          <button style={box} onClick={() => showModal(Modal1)}>
			  
			 <img src={AssetStore.get('assets/images/headshots/DerlinChao.jpg') }
                        style={{ height: 150, width: 150,}}></img>
				
				</button>
				
		<br></br>

            <StyledText>
              <strong>Der-lin Chao</strong>
              <br />
              PI, Project Director and Site Director
            </StyledText>
            </Grid>
            <Grid
                item
                xs={12}
                sm={4}
              >

			<button style={box} onClick={() => showModal(Modal11)}>
          <img
			src={AssetStore.get('assets/images/headshots/MingYingLi.jpg') }
			style={{ height: 150, width: 150,}} ></img></button>
       
                <StyledText>
                  <strong>
                    Ming-Ying Li
                  </strong>
                  <br />
                  Assistant Project Director and Site Director
                </StyledText>
              </Grid>
              </Grid>
            <br/>
            <br/>
            <StyledTableTitle>
              Taiwan Office
            </StyledTableTitle>
            <StyledShortUnderline style={{ display: 'inline-table', }}/>
            <br />
            <Grid
              container
              justify="center"
              alignItems="center"
              spacing={15}
            >
              <Grid
                item
                xs={12}
                sm={4}
              >

				<button style={box} onClick={() => showModal(Modal21)}>
          <img
			src={AssetStore.get('assets/images/headshots/william_stanton.png') }
			style={{ height: 150, width: 150,}} ></img></button>
				  
       
                <StyledText>
                  <strong>
                    William A. Stanton
                  </strong>
                  <br />
                  Director of NYMU Flagship Project
                </StyledText>
              </Grid>
			  </Grid>

			<Grid
              container
              justify="center"
              alignItems="center"
              spacing={15}
            >	
				
              <Grid
                item
                xs={12}
                sm={4}
              >

				<button style={box} onClick={() => showModal(Modal22)} >
          <img
			src={AssetStore.get('assets/images/headshots/April_Liu.png') }
			style={{ height: 150, width: 150,}} ></img></button>
				  
       
                <StyledText>
                  <strong>
                  April Liu
                  </strong>
                  <br />
                  Resident Director
                </StyledText>
              </Grid>

              <Grid
                item
                xs={12}
                sm={4}
              >

				<button style={box} onClick={() => showModal(Modal25)}>
          <img
			src={AssetStore.get('assets/images/headshots/zhi-shiang.jpg') }
			style={{ height: 150, width: 150,}} ></img></button>
				  
       
                <StyledText>
                  <strong>
                    Zhi-Shiang Yang
                  </strong>
                  <br />
                  Internship Coordinator
                </StyledText>
              </Grid>

  
									
				
              <Grid
                item
                xs={12}
                sm={4}
              >

				<button style={box} onClick={() => showModal(Modal27)}>
          <img
			src={AssetStore.get('assets/images/headshots/PoChungLin.jpg') }
			style={{ height: 150, width: 150,}} ></img></button>
				  
       
                <StyledText>
                  <strong>
                    Po-Chung Lin
                  </strong>
                  <br />
                  Student Housing Coordinator
                </StyledText>
              </Grid>
			  
			  </Grid>
				
				
              <Grid
              container
              justify="center"
              alignItems="center"
              spacing={15} >


              <Grid
                item
                xs={12}
                sm={4}
              >

				<button style={box} onClick={() => showModal(Modal23)}>
          <img
			src={AssetStore.get('assets/images/headshots/Yen-Ting_Liu.jpg') }
			style={{ height: 150, width: 150,}} ></img></button>
				  
       
                <StyledText>
                  <strong>
                    Yen-Ting Liu
                  </strong>
                  <br />
                  Full-time Faculty
                </StyledText>
              </Grid>

              <Grid
                item
                xs={12}
                sm={4}
              >

				<button style={box} onClick={() => showModal(Modal24)} >
          <img
			src={AssetStore.get('assets/images/headshots/Shan-yu_Guo.jpg') }
			style={{ height: 150, width: 150,}} ></img></button>
				  
       
                <StyledText>
                  <strong>
                  Shan-yu Guo
                  </strong>
                  <br />
                  Full-time Faculty
                </StyledText>
              </Grid>
				  
              <Grid
                item
                xs={12}
                sm={4}
              >

				<button style={box} onClick={() => showModal(Modal26)} >
          <img
			src={AssetStore.get('assets/images/headshots/YunWenSu.jpg') }
			style={{ height: 150, width: 150,}} ></img></button>
				  
       
                <StyledText>
                  <strong>
                  Yun-Wen Su
                  </strong>
                  <br />
                  Full-time Faculty
                </StyledText>
              </Grid>


				</Grid>
            <br />
            <br />
            <StyledTableTitle>
              U.S. Office
            </StyledTableTitle>
            <StyledShortUnderline style={{ display: 'inline-table', }}/>
            <br />
            <Grid
              container
              justify="center"
              alignItems="center"
              spacing={15}
            >
              <Grid
                item
                xs={12}
                sm={4}
              >

				<button style={box} onClick={() => showModal(Modal8)}>
          <img
			src={AssetStore.get('assets/images/headshots/SamMaser.png') }
			style={{ height: 150, width: 150,}} ></img></button>
				  
       
                <StyledText>
                  <strong>
                    Sam Maser
                  </strong>
                  <br />
                  Project Coordinator
                </StyledText>
              </Grid>
				
					
              <Grid
                item
                xs={12}
                sm={4}
              >

		<button style={box} onClick={() => showModal(Modal9)}>
          <img
			src={AssetStore.get('assets/images/headshots/BingYingHu.jpg') }
			style={{ height: 150, width: 150,}} ></img></button>

                <StyledText>
                  <strong>
                    Bing Ying Hu
                  </strong>
                  <br />
                  Academic Credits and Transcripts
                </StyledText>
              </Grid>
              <Grid
                item
                xs={12}
                sm={4}
              >

			<button style={box} onClick={() => showModal(Modal10)}>
          <img
			src={AssetStore.get('assets/images/headshots/BoHao.jpg') }
			style={{ height: 150, width: 150,}} ></img></button>

                <StyledText>
                  <strong>
                    Bo Hao
                  </strong>
                  <br />
                  Placements, Assessments, and Certificates
                </StyledText>
              </Grid>
            
           
			
    </Grid>
          
            <br />
            <br />
            <StyledTableTitle>
              Flagship Directors for Overall Program Development
            </StyledTableTitle>
            <StyledShortUnderline style={{ display: 'inline-table', }}/>
            <br />
            <Grid
              container
              justify="center"
              alignItems="center"
              spacing={15}
            >
              <Grid
                item
                xs={12}
                sm={4}
              >


		<button style={box} onClick={() => showModal(Modal13)}>
          <img
			src={AssetStore.get('assets/images/headshots/chen-yea-fen.jpg') }
			style={{ height: 150, width: 150,}} ></img></button>
         
                <StyledText>
                  <strong>
                    Yea-Fen Chen
                  </strong>
                  <br />
                  Indiana University (Bloomington)
                </StyledText>
              </Grid>
              <Grid
                item
                xs={12}
                sm={4}
              >

		<button style={box} onClick={() => showModal(Modal14)}>
          <img
			src={AssetStore.get('assets/images/headshots/Faculty - Charlie.jpg') }
			style={{ height: 175, width: 150,}} ></img></button>
      

                <StyledText>
                  <strong>
                    Charles Egan
                  </strong>
                  <br />
                  San Francisco State University
                </StyledText>
              </Grid>

	
				
				</Grid>
            <br />
            <br />

            <StyledTableTitle>
              Advisors for Chinese Language Curriculum
            </StyledTableTitle>
            <StyledShortUnderline style={{ display: 'inline-table', }}/>
            <br />
            <Grid
              container
              justify="center"
              alignItems="center"
              spacing={15}
            >
              <Grid
                item
                xs={12}
                sm={4}
              >


			<button style={box} onClick={() => showModal(Modal17)}>
          <img
			src={AssetStore.get('assets/images/headshots/vp_hsin.jpg') }
			style={{ height: 175, width: 150,}} ></img></button>
	
                <StyledText>
                  <strong>
                    Shih-Chang Hsin
                  </strong>
                  <br />
                  Vice President at National Tsing Hua University and Professor at National Taiwan Normal University
                </StyledText>
              </Grid>
              <Grid
                item
                xs={12}
                sm={4}
              >

	<button style={box} onClick={() => showModal(Modal18)}>
          <img
			src={AssetStore.get('assets/images/headshots/ChengchingLi.jpg') }
			style={{ height: 175, width: 150,}} ></img></button>
		  
                <StyledText>
                  <strong>
                    Chen-ching Li
                  </strong>
                  <br />
                  Professor Emeritus at Shih Hsin University
                </StyledText>
              </Grid>
              <Grid
                item
                xs={12}
                sm={4}
              >



			<button  style={box} onClick={() => showModal(Modal19)}>
          <img
			src={AssetStore.get('assets/images/headshots/Shou-HsinTeng.png') }
			style={{ height: 175, width: 150,}} ></img></button>
		 

                <StyledText>
                  <strong>
                    Shou-Hsin Teng
                  </strong>
                  <br />
                  Professor at Chung Yuan Christian University
                </StyledText>
              </Grid>
              <Grid
                item
                xs={12}
                sm={4}
              >


			<button style={box} onClick={() => showModal(Modal20)}>
          <img
			src={AssetStore.get('assets/images/headshots/Teh-mingYeh.png') }
			style={{ height: 175, width: 150,}} ></img></button>
		  
       
                <StyledText>
                  <strong>
                    Teh-ming Yeh
                  </strong>
                  <br />
                  Professor Emeritus at National Taiwan Normal University
                </StyledText>
              </Grid>
        
				  </Grid>
            <StyledCenteredActionButton>
              <strong>Have questions?</strong>
              <p>
                <Link to="/contact/form">
                  <StyledLinkText>
                    CONTACT US
                  </StyledLinkText>
                </Link>
              </p>
            </StyledCenteredActionButton>	
				
      </Fragment>
      )}
    </ModalConsumer> 
	</ModalProvider>	 	
			</div></div></div>
  );
  }
}
