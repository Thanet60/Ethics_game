import React, {Component} from "react";
import app from "./base";
import * as firebase from "firebase/app";
import firedata from "./test";
import "./index.css"
import logo from './p1.png';
import logo2 from './unknown1.png';
import p1 from './image/p1ori.png'
import p2 from './image/p2.png'
import p3 from './image/p3.png'
import p4 from './image/p4.png'
import sound from './sound.mp3'
import sound2 from './sound2.mp3'
import sound3 from './sound3.mp3'

const {getStoryName} = require('./simuData/functionData')
const {getOneStory} = require('./simuData/functionData')
const {getUser} = require('./simuData/functionData')


class play extends Component{

  storyNameList = getStoryName();

  soundClick = () =>{
    var audio  = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/click.mp3');
      var audio2 = new Audio('https://s3-us-west-2.amazonaws.com/s.cdpn.io/242518/clickUp.mp3');
      audio.load();
      audio.play();
      // audio2.load();
      // audio2.play();
  }
  soundClick2 = () =>{
    var audio  = new Audio(sound);
      audio.load();
      audio.play();
  }
  soundClick3 = () =>{
    var audio  = new Audio(sound2);
      audio.load();
      audio.play();
  }
  soundClick4 = () =>{
    var audio  = new Audio(sound3);
      audio.load();
      audio.play();
  }

  Person = () => {
    return(
      <article className="person">
          <h4>คะแนนล่าสุด : {this.score*100}</h4>
          <h4>คะแนนรวม : {this.scoreSum}</h4>
      </article>
    )
  }

    // <><button onClick={ this.onClickPlay.bind(this) } >ชื่อเรื่อง: {name.storyName} 
    // <br/>{name.storyTrype} 
    // <br/>บทที่: {name.storyChapter}
    // </button><br/></> )

  user = getUser();
  score = 0;
  sum = 0;
  numberChapter = 0;
  scoreChapter = [0,0,0,0,0,0];
  scoreSum = 0;
  storyName = [
    {
        storyName:'การนำเพลงไปใช้',
        storyTrype:'General person',
        storyChapter:'บทที่ 4 ทรัพย์สินทางปัญญา',
        storyNumber:0,
        score:0,
    },
    {
        storyName: 'การรับงานและส่งงาน',
        storyTrype:'Solfware Developer',
        storyChapter:'บทที่ 7 คอมพิวเตอร์และการทำงาน',
        storyNumber:1,
        score:0,
    },
    {
        storyName:'การแสดงออกบนอินเตอร์เน็ต',
        storyTrype:'General person',
        storyChapter:'บทที่ 3 เสรีภาพในการแสดงออกในยุคอินเทอร์เน็ต',
        storyNumber:2,
        score:0,
    },
    {
        storyName:'การเข้าระบบอินเตอร์เน็ต',
        storyTrype:'Solfware Developer',
        storyChapter:'บทที่ 6 อาชญากรรมคอมพิวเตอร์',
        storyNumber:3,
        score:0,
    },
    {
        storyName:'การทำหน้าที่งานของตนเอง',
        storyTrype:'General person',
        storyChapter:'บทที่ 5 อันตรายและความเสี่ยงในการใช้งานคอมพิวเตอร์',
        storyNumber:4,
        score:0,
    },
    {
        storyName:'การรับผิดงาน',
        storyTrype:'Business',
        storyChapter:'บทที่ 9 จรรยาบรรณและความรับผิดชอบ',
        storyNumber:5,
        score:0,
    },
    {
      storyName:'การเข้าบัญชีของผู้อื่น',
      storyTrype:'General person',
      storyChapter:'บทที่ 2 ความเป็นส่วนตัว',
      storyNumber:6,
      score:0,
  },
  {
    storyName:'การเอาใจใส่',
    storyTrype:'General person',
    storyChapter:'บทที่ 8 คอมพิวเตอร์กับสังคม',
    storyNumber:7,
    score:0,
},
{
  storyName:'การมีความรับผิดชอบ',
  storyTrype:'General person',
  storyChapter:'บทที่ 9 จรรยาบรรณและความรับผิดชอบ',
  storyNumber:8,
  score:0,
},
{
  storyName:'การรับสมัครพนักงาน',
  storyTrype:'Business',
  storyChapter:'บทที่ 7 คอมพิวเตอร์กับงาน',
  storyNumber:9,
  score:0,
}
  
  ]

  totalScore = () => {
      this.sum = 0;
      this.scoreChapter.forEach(element => {
          this.sum += element;
      });
      this.scoreSum = this.sum;
  }


  

  onClickHomeC () {
      this.props.history.push("/");
  }
  
  constructor(props){
      super(props);
      this.state ={
          data:getOneStory(0),
          count: 0,
          i:0,
          j:0,
          k:0,
          score:0,
          imag1:1,
          imag2:2,
          imag3:3,
          imag4:4,
          showButtonNext:false,
          showButtonChoice:false,
          showText:false,
          showScore:false,
          showMain:true,
          showChapter:false,
      } 
  }

  imgStart = () => {
      document.getElementById('1').setAttribute("style","opacity: 1;");
      document.getElementById('2').setAttribute("style","opacity: 1;");
      document.getElementById('3').setAttribute("style","opacity: 0;");
      document.getElementById('4').setAttribute("style","opacity: 0;");
  }

  onClickPlay0 = () => {
    this.soundClick3(); 
    this.score = 0;
    this.numberChapter = 0;
    this.setState({ 
      showText:true,
      showButtonNext:true,
      showChapter:false,
      data:getOneStory(0),
    });
    // document.body.style.backgroundImage = "url('https://cdn1.bbcode0.com/uploads/2021/3/10/57a2ae6ebe8dd3b893a97bdfd7131fe6-full.jpg')";
  }
  onClickPlay1 = () => {
    this.soundClick3();
    this.score = 0;
    this.numberChapter = 1;
    this.setState({ 
      showText:true,
      showButtonNext:true,
      showChapter:false,
      data:getOneStory(1),
    });
  }
  onClickPlay2 = () => {
    this.soundClick3();
    this.score = 0;
    this.numberChapter = 2;
    this.setState({ 
      showText:true,
      showButtonNext:true,
      showChapter:false,
      data:getOneStory(2),
    });

  }
  onClickPlay3 = () => {
    this.soundClick3();
    this.score = 0;
    this.numberChapter = 3;
    this.setState({ 
      showText:true,
      showButtonNext:true,
      showChapter:false,
      data:getOneStory(3),
    });
 
  }
  onClickPlay4 = () => {
    this.soundClick3();
    this.score = 0;
    this.numberChapter = 4;
    this.setState({ 
      showText:true,
      showButtonNext:true,
      showChapter:false,
      data:getOneStory(4),
    });

  }
  onClickPlay5 = () => {
    this.soundClick3();
    this.score = 0;
    this.numberChapter = 5;
    this.setState({ 
      showText:true,
      showButtonNext:true,
      showChapter:false,
      data:getOneStory(5),
    });

  }
  onClickPlay6 = () => {
    this.soundClick3();
    this.score = 0;
    this.numberChapter = 6;
    this.setState({ 
      showText:true,
      showButtonNext:true,
      showChapter:false,
      data:getOneStory(6),
    });

  }
  onClickPlay7 = () => {
    this.soundClick3();
    this.score = 0;
    this.numberChapter = 7;
    this.setState({ 
      showText:true,
      showButtonNext:true,
      showChapter:false,
      data:getOneStory(7),
    });

  }
  onClickPlay8 = () => {
    this.soundClick3();
    this.score = 0;
    this.numberChapter = 8;
    this.setState({ 
      showText:true,
      showButtonNext:true,
      showChapter:false,
      data:getOneStory(8),
    });

  }
  onClickPlay9 = () => {
    this.soundClick3();
    this.score = 0;
    this.numberChapter = 9;
    this.setState({ 
      showText:true,
      showButtonNext:true,
      showChapter:false,
      data:getOneStory(9),
    });

  }

  
  // NameList = this.storyNameList.map(name => 
  //   <section className="person1-list">
  //     <article className="person1" onClick={this.onClickPlay.bind(name.storyNumber)}>
  //       <h4>ชื่อเรื่อง: {name.storyName} </h4>
  //       <h4>รูปแบบ:  {name.storyTrype} </h4>
  //       <h4>บทที่:   {name.storyChapter}</h4>
  //     </article>
  //   </section>
  //   )

  handleClickNext = () => {
    this.soundClick();
    this.setState({ count: ++this.state.count });
    if(this.state.data.whoTalk[this.state.count] == this.state.imag1)
    {
      document.getElementById('1').setAttribute("style","opacity: 1;");
      document.getElementById('2').setAttribute("style","opacity: 0.5;");
      document.getElementById('3').setAttribute("style","opacity: 0;");
      document.getElementById('4').setAttribute("style","opacity: 0;");
    }
    if(this.state.data.whoTalk[this.state.count] == this.state.imag2)
    {
      document.getElementById('1').setAttribute("style","opacity: 0.5;");
      document.getElementById('2').setAttribute("style","opacity: 1;");
      document.getElementById('3').setAttribute("style","opacity: 0;");
      document.getElementById('4').setAttribute("style","opacity: 0;");
    }
    if(this.state.data.whoTalk[this.state.count] == this.state.imag3)
    {
      document.getElementById('1').setAttribute("style","opacity: 0;");
      document.getElementById('2').setAttribute("style","opacity: 0.5;");
      document.getElementById('3').setAttribute("style","opacity: 1;");
      document.getElementById('4').setAttribute("style","opacity: 0;");
    }
    if(this.state.data.whoTalk[this.state.count] == this.state.imag4)
    {
      document.getElementById('1').setAttribute("style","opacity: 0.5;");
      document.getElementById('2').setAttribute("style","opacity: 0;");
      document.getElementById('3').setAttribute("style","opacity: 0;");
      document.getElementById('4').setAttribute("style","opacity: 1;");
    }
    if(this.state.data.choiceUp[this.state.j] == this.state.count){
      this.operation();
      this.setState({ j: ++this.state.j });
    }
    if(this.state.count + 1 > this.state.data.dialogCount)
    {
      this.scoreChapter[this.numberChapter] = this.score*100;
      this.totalScore();
      this.soundClick4();
      this.setState({
          showButtonChoice:false,
          showButtonNext:false,
          showText:false,
          showScore:true
      })
    }
  }  

  operation = () => {
      this.setState({
          showButtonChoice:true,
          showButtonNext:false
      })
  }

  start = () => {
    this.totalScore();
    this.soundClick3();
    this.setState({
        showMain:false,
        showChapter:true
    })
  }

  restart = () =>{
    this.soundClick3();
    this.setState({ 
      showText:false,
      showButtonNext:false,
      showMain:true,
      showScore:false,
      count:0,
      i:0,
      j:0,
      k:0,
      score:0
    });
  }

  selectChoice1 = () => {
      this.score += this.state.data.choiceScore[this.state.k];
      this.setState({ k: this.state.k + 2});
      this.setState({
          showButtonChoice:false,
          showButtonNext:true
      })
      this.setState({ count: ++this.state.count });
      if(this.state.data.choiceSound[this.state.k] == 1){
        this.soundClick2();
      }
      if(this.state.data.choiceSound[this.state.k] == 0){
        this.soundClick();
      }
      if(this.state.data.whoTalk[this.state.count] == this.state.imag1)
    {
      document.getElementById('1').setAttribute("style","opacity: 1;");
      document.getElementById('2').setAttribute("style","opacity: 0.5;");
      document.getElementById('3').setAttribute("style","opacity: 0;");
      document.getElementById('4').setAttribute("style","opacity: 0;");
    }
    if(this.state.data.whoTalk[this.state.count] == this.state.imag2)
    {
      document.getElementById('1').setAttribute("style","opacity: 0.5;");
      document.getElementById('2').setAttribute("style","opacity: 1;");
      document.getElementById('3').setAttribute("style","opacity: 0;");
      document.getElementById('4').setAttribute("style","opacity: 0;");
    }
    if(this.state.data.whoTalk[this.state.count] == this.state.imag3)
    {
      document.getElementById('1').setAttribute("style","opacity: 0;");
      document.getElementById('2').setAttribute("style","opacity: 0.5;");
      document.getElementById('3').setAttribute("style","opacity: 1;");
      document.getElementById('4').setAttribute("style","opacity: 0;");
    }
    if(this.state.data.whoTalk[this.state.count] == this.state.imag4)
    {
      document.getElementById('1').setAttribute("style","opacity: 0.5;");
      document.getElementById('2').setAttribute("style","opacity: 0;");
      document.getElementById('3').setAttribute("style","opacity: 0;");
      document.getElementById('4').setAttribute("style","opacity: 1;");
    }
  }
  selectChoice2 = () => {
      this.score += this.state.data.choiceScore[this.state.k+1];
      this.setState({ k: this.state.k + 2});
      this.setState({
          showButtonChoice:false,
          showButtonNext:true
      })
      this.setState({ count: ++this.state.count });
      if(this.state.data.choiceSound[this.state.k+1] == 1){
        this.soundClick2();
      }
      if(this.state.data.choiceSound[this.state.k+1] == 0){
        this.soundClick();
      }
      if(this.state.data.whoTalk[this.state.count] == this.state.imag1)
    {
      document.getElementById('1').setAttribute("style","opacity: 1;");
      document.getElementById('2').setAttribute("style","opacity: 0.5;");
      document.getElementById('3').setAttribute("style","opacity: 0;");
      document.getElementById('4').setAttribute("style","opacity: 0;");
    }
    if(this.state.data.whoTalk[this.state.count] == this.state.imag2)
    {
      document.getElementById('1').setAttribute("style","opacity: 0.5;");
      document.getElementById('2').setAttribute("style","opacity: 1;");
      document.getElementById('3').setAttribute("style","opacity: 0;");
      document.getElementById('4').setAttribute("style","opacity: 0;");
    }
    if(this.state.data.whoTalk[this.state.count] == this.state.imag3)
    {
      document.getElementById('1').setAttribute("style","opacity: 0;");
      document.getElementById('2').setAttribute("style","opacity: 0.5;");
      document.getElementById('3').setAttribute("style","opacity: 1;");
      document.getElementById('4').setAttribute("style","opacity: 0;");
    }
    if(this.state.data.whoTalk[this.state.count] == this.state.imag4)
    {
      document.getElementById('1').setAttribute("style","opacity: 0.5;");
      document.getElementById('2').setAttribute("style","opacity: 0;");
      document.getElementById('3').setAttribute("style","opacity: 0;");
      document.getElementById('4').setAttribute("style","opacity: 1;");
    }
  }

  render(){


    return(
      <>
            <div align = 'center'>
                  {
                    this.state.showMain?
                    <>
                        <div className = "person-head">
                          <div>Ethics Game</div>
                        </div>
                        <section className="person-list">
                          <this.Person/>
                          <div class="button_cont" align="center" onClick={this.start}><a class="example_e">เริ่มเกมทันที</a></div>
                      </section>
                    </>
                      :null
                  }
                  {
                    this.state.showChapter?
                    <>
                    <div className = "person1-head">
                        <div>ด่านต่างๆ</div>
                    </div>
                    <section className="person1-list">
                      
                      <article className="person1" onClick={this.onClickPlay0.bind(this)}>
                        <h4>ชื่อเรื่อง: {this.storyName[0].storyName} </h4>
                        <h4>รูปแบบ:  {this.storyName[0].storyTrype} </h4>
                        <h4>บทที่:   {this.storyName[0].storyChapter}</h4>
                        <h4>คะแนน: {this.scoreChapter[0]} /1000</h4>
                      </article>
                      </section>
                      <section className="person1-list">
                      <article className="person1" onClick={this.onClickPlay1.bind(this)}>
                        <h4>ชื่อเรื่อง: {this.storyName[1].storyName} </h4>
                        <h4>รูปแบบ:  {this.storyName[1].storyTrype} </h4>
                        <h4>บทที่:   {this.storyName[1].storyChapter}</h4>
                        <h4>คะแนน: {this.scoreChapter[1]} /1000</h4>
                      </article>
                      </section>
                      <section className="person1-list">
                      <article className="person1" onClick={this.onClickPlay2.bind(this)}>
                        <h4>ชื่อเรื่อง: {this.storyName[2].storyName} </h4>
                        <h4>รูปแบบ:  {this.storyName[2].storyTrype} </h4>
                        <h4>บทที่:   {this.storyName[2].storyChapter}</h4>
                        <h4>คะแนน: {this.scoreChapter[2]} /1000</h4>
                      </article>
                      </section>
                      <section className="person1-list">
                      <article className="person1" onClick={this.onClickPlay3.bind(this)}>
                        <h4>ชื่อเรื่อง: {this.storyName[3].storyName} </h4>
                        <h4>รูปแบบ:  {this.storyName[3].storyTrype} </h4>
                        <h4>บทที่:   {this.storyName[3].storyChapter}</h4>
                        <h4>คะแนน: {this.scoreChapter[3]} /1000</h4>
                      </article>
                      </section>
                      <section className="person1-list">
                      <article className="person1" onClick={this.onClickPlay4.bind(this)}>
                        <h4>ชื่อเรื่อง: {this.storyName[4].storyName} </h4>
                        <h4>รูปแบบ:  {this.storyName[4].storyTrype} </h4>
                        <h4>บทที่:   {this.storyName[4].storyChapter}</h4>
                        <h4>คะแนน: {this.scoreChapter[4]} /1000</h4>
                      </article>
                      </section>
                      <section className="person1-list">
                      <article className="person1" onClick={this.onClickPlay5.bind(this)}>
                        <h4>ชื่อเรื่อง: {this.storyName[5].storyName} </h4>
                        <h4>รูปแบบ:  {this.storyName[5].storyTrype} </h4>
                        <h4>บทที่:   {this.storyName[5].storyChapter}</h4>
                        <h4>คะแนน: {this.scoreChapter[5]} /1000</h4>
                      </article>
                      </section>
                      <section className="person1-list">
                      <article className="person1" onClick={this.onClickPlay6.bind(this)}>
                        <h4>ชื่อเรื่อง: {this.storyName[6].storyName} </h4>
                        <h4>รูปแบบ:  {this.storyName[6].storyTrype} </h4>
                        <h4>บทที่:   {this.storyName[6].storyChapter}</h4>
                        <h4>คะแนน: {this.scoreChapter[6]} /1000</h4>
                      </article>
                      </section>
                      <section className="person1-list">
                      <article className="person1" onClick={this.onClickPlay7.bind(this)}>
                        <h4>ชื่อเรื่อง: {this.storyName[7].storyName} </h4>
                        <h4>รูปแบบ:  {this.storyName[7].storyTrype} </h4>
                        <h4>บทที่:   {this.storyName[7].storyChapter}</h4>
                        <h4>คะแนน: {this.scoreChapter[7]} /1000</h4>
                      </article>
                      </section>
                      <section className="person1-list">
                      <article className="person1" onClick={this.onClickPlay8.bind(this)}>
                        <h4>ชื่อเรื่อง: {this.storyName[8].storyName} </h4>
                        <h4>รูปแบบ:  {this.storyName[8].storyTrype} </h4>
                        <h4>บทที่:   {this.storyName[8].storyChapter}</h4>
                        <h4>คะแนน: {this.scoreChapter[8]} /1000</h4>
                      </article>
                      </section>
                      <section className="person1-list">
                      <article className="person1" onClick={this.onClickPlay9.bind(this)}>
                        <h4>ชื่อเรื่อง: {this.storyName[9].storyName} </h4>
                        <h4>รูปแบบ:  {this.storyName[9].storyTrype} </h4>
                        <h4>บทที่:   {this.storyName[9].storyChapter}</h4>
                        <h4>คะแนน: {this.scoreChapter[9]} /1000</h4>
                      </article>
                      </section>

                    </>
                      :null
                  }
                {
                    this.state.showText?
                    <>
                    <div>
                      <div className = "person1-head" >
                      <div>{ this.state.data.storyName} </div>
                      </div>
                      <article id = '1' className = "person4">
                      <img src= {p1} width="800" height="800"/>
                        </article>
                        <article id = '2' className = "person5">
                        <img src= {p2} width="800" height="800"/>
                        </article>
                        <article id = '3' className = "person6">
                        <img src= {p3} width="800" height="800"/>
                        </article>
                        <article id = '4' className = "person7">
                        <img src= {p4} width="800" height="800"/>
                        </article>
                      <article className = "person3">
                        <h4 >{this.state.data.dialog[this.state.count]}</h4>
                        </article>
                    </div>
                    </>
                    :null
                }
                {
                    this.state.showButtonChoice?
                    <div className>
                         <button class="big-button1" onClick={this.selectChoice1}>{this.state.data.choice[this.state.k]}</button>
                         <button class="big-button2" onClick={this.selectChoice2}> {this.state.data.choice[this.state.k+1]}</button>
                    </div>
                    :null
                }
                {
                    this.state.showButtonNext?
                    <>
                    {/* <div className = "img1" >
                      <img src= {logo} />
                      </div> */}
                      <button class="big-button" onClick={this.handleClickNext} > ถัดไป </button>
                    </>
                    :null
                }
                {
                    this.state.showScore?
                    <div align = 'center'>
                      <div className = "person7-head">
                          <div>สรุปผล</div>
                        </div>
                      <article className="person">
                        <h4>คะแนนที่ได้ในด่านนี้</h4><br/>
                        <h4>{(this.score / 10) * 1000}</h4><br/>
                      </article>
                      <div class="button_cont" align="center"><a class="example_e" onClick = {this.restart}> เล่นอีกครั้ง </a></div>
                    </div>
                    :null
                }
            </div>
        </>
    )
    }
}
  

export default play;