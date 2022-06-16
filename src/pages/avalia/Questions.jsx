import React, { useContext, useEffect, useState }  from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { GroupApi } from '../../services/api';
import Logo from '../../assets/Logo.jpeg'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination, Navigation } from "swiper";

import "./avalia.css";



import Sidebar from '../home/components/Sidebar';
import Quadro from '../avalia/components/QuadroResposta';


export default function Questions(props) {
    const auth = useContext(AuthContext);      
    const [group, setGroup] = useState([]);
    const [name, setName] = useState();
    const [assessment, setAssessment] = useState([]);

     const Api = GroupApi();

     
   useEffect(() =>{
    groupAll();

  }, [])

 const groupAll = async () => {
    const idgroup = auth.setgroupIDselec()
    let data = await Api.listQuestionsByGroupId(idgroup);
    const nameGroup = await Api.listGroupById(idgroup);

    const idAssess = auth.setAssessmentID();
    const nameAssess = await auth.AssessmentById(idAssess);
    
    setGroup(data);
    setName(nameGroup.group);
    setAssessment(nameAssess.title);

 }


 const pagination = {
  clickable: true,
  renderBullet: function (index, className) {
    return '<span class="' + className + '">' + (index + 1) + "</span>";
  },
};


    return (
      <div className="container">
      <header>
         <h2>Titulo Avaliação: {assessment}</h2>
      </header>
      <aside>
      <img src={Logo} alt="" />
      <Sidebar title= {auth.user.fullname}/>
      </aside>
      <main>
        {/* <h2>{"Critério: " + name}</h2> */}
      <div className="containerRes">
      <Swiper
        navigation={true}
        pagination={pagination}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
            {group.length > 0 && group.map((item, key) =>(
              <SwiperSlide>
                  <Quadro 
                  key={key}  
                  questionId={item._id}
                  descrip={item.enunciation} 
                  group={"Critério: " + name}
                  // group={"Questão: " + item.number} 
                  cod={item.number} />
                </SwiperSlide>
            ))}
      </Swiper>

      </div>
    </main>
  </div>

    )
}