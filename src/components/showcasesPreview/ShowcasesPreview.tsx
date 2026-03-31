// import './showcasesPreview.css';
// import Button from '../button/Button';
// import { useNavigate } from 'react-router-dom';

// const showcasesList = [
//   {
//     kicker: "Nome da empresa",
//     title: "Site Institucional",
//     description: "Nova presença digital com foco em performance, UX e segmentação de públicos.",
//   },
//   {
//     kicker: "Nome da empresa",
//     title: "Sistemas & Plataformas",
//     description: "Nova presença digital com foco em performance, UX e segmentação de públicos.",
//   }
// ];

// const ShowcasesPreview = () => {
//   const navigate = useNavigate();

//   return (
//     <section className='showcasesPreviewWrapper' id='showcases-preview'>
//       <div className='showcasesPreviewContainer'>
//         <h2 className='showcasesPreviewSectionTitle'>Showcases</h2>

//         <div className='showcasesPreviewGrid'>
//           {showcasesList.map((item, index) => (
//             <div className='showcasePreviewCard' key={index}>
//               <div className='showcasePreviewImagePlaceholder'>
//                 {/* Placeholder Image */}
//               </div>
//               <div className='showcasePreviewInfo'>
//                 <span className='showcasePreviewKicker'>{item.kicker}</span>
//                 <h3 className='showcasePreviewItemTitle'>{item.title}</h3>
//                 <p className='showcasePreviewItemDesc'>{item.description}</p>
//               </div>
//               {index === 0 && (
//                 <div className='showcasePreviewAction'>
//                   <Button
//                     view='secundario'
//                     width='auto'
//                     onClick={() => navigate('/showcases')}
//                   >
//                     Veja todos os showcases
//                   </Button>
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ShowcasesPreview;
