// import React, { useCallback, useState } from 'react';
// import styled from 'styled-components';
// import Categories from './Category';
// // 요거는 보류!
// const HeaderBlock = styled.div`
//   display: flex;
//   flex-direction: column;
//   width: 100%;
//   height: 140px;
//   background: white;
//   position: fixed;
//   align-items: flex-start;
//   top: 0;
//   left: 0;
//   right: 0;
//   bottom: 0;
//   overflow-y: auto;
//   overflow-x: hidden;
//   z-index: 1000;
//   padding: 1.2rem;
//   .top-header {
//     display: flex;
//     width: 100%;
//     height: 80px;
//     background: black;
//   }
//   .header-logo {
//     width: 100px;
//     height: 50px;
//     background: gray;
//   }
//   .header-search {
//     width: 400px;
//     height: 50px;
//     background: gray;
//     button {
//       width: 20px;
//       height: 20px;
//     }
//   }
//   .bottom-header {
//     width: 100%;
//     height: 60px;
//     background: green;
//   }
// `;

// const HeaderContainer = () => {
//   const [form, setForm] = useState({
//     keyword: '',
//   });

//   const onClick = () => {};
//   const onChange = useCallback((e) => {
//     const { name, value } = e.target;
//     setForm(
//       {
//         ...form,
//         [name]: value,
//       },
//       [form],
//     );
//   });
//   return (
//     <HeaderBlock>
//       <div className="top-header">
//         <div className="header-logo"></div>
//         <div className="header-search">
//           <form onSubmit={onClick}>
//             <select name="search_type">
//               <option value="channel">채널</option>
//               <option value="video">동영상</option>
//             </select>
//             <input
//               type="text"
//               name="keyword"
//               value={form.keyword}
//               onChange={onChange}
//               required
//             />
//             <button type="submit"></button>
//           </form>
//         </div>
//       </div>
//       <Categories />
//     </HeaderBlock>
//   );
// };
// export default HeaderContainer;
