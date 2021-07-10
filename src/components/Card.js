import React from 'react'
import '../styling/BackCard.css'
import '../styling/FrontCard.css'
import AndroidOutlinedIcon from '@material-ui/icons/AndroidOutlined';
import PanToolTwoToneIcon from '@material-ui/icons/PanToolTwoTone';
import ContactSupportOutlinedIcon from '@material-ui/icons/ContactSupportOutlined';
import QuestionAnswerRoundedIcon from '@material-ui/icons/QuestionAnswerRounded';
import FiberManualRecordTwoToneIcon from '@material-ui/icons/FiberManualRecordTwoTone';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { deepOrange } from '@material-ui/core/colors';


const useStyles = makeStyles((theme) => ({
  avatar: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[400],
    border: `1px solid`,
    marginTop:'1vh',
    position:'absolute',
    animation: 'fadeInAnimation linear 5s',
    animationIterationCcount: '1',
    animationFillMode: 'backwards',
},}));

const Card = () => {
    const classes = useStyles();
    return (
        <div className='background-container'>
            <div className='backCard-container'>
                <div className='backCard-text'>
                    <h1>IRIS</h1>
                    <h2>Hello <PanToolTwoToneIcon/></h2>
                    <h3>I am Iris, a Virtual Assistance</h3>
                    <h3>How may I help you?</h3>
                    <Avatar className={classes.avatar}  >
                        <AndroidOutlinedIcon/>
                    </Avatar>
                </div>
            <div className='frontCard-container'>
                <div className='frontCard-text'>
                    <h4>Frequently Asked Questions <ContactSupportOutlinedIcon style={{fill:'rgb(255, 116, 51'}}/></h4>
                    <div className='question-container'>
                        <button className='question-one'><FiberManualRecordTwoToneIcon style={{fill:'rgb(255, 116, 51'}} fontSize='small'/>Can I redeem my FB before the original term?</button>
                        <button className='question-two'><FiberManualRecordTwoToneIcon style={{fill:'rgb(255, 116, 51'}} fontSize='small'/>How do I pay my Credit card bill?</button>
                        <button className='question-three'><FiberManualRecordTwoToneIcon style={{fill:'rgb(255, 116, 51'}} fontSize='small'/>How can I get my Account Statement?</button>
                        <button className='question-four'><FiberManualRecordTwoToneIcon style={{fill:'rgb(255, 116, 51'}} fontSize='small'/>What is the tenure of Fixed Deposit?</button>
                        <button className='msg-Btn'><QuestionAnswerRoundedIcon style={{fill:'rgb(207, 202, 202)'}}/> Start a New Conversation</button>
                    </div>
                </div>
            </div>
            </div>
        </div>
        )}
              
            
            
export default Card
           
        
           
    
            
            
  
    
                
                    
                
                    
                    
                    
                    
                
                
                    
                   
                
                    
                    
               
           
                    
                
               
               
                
            

   
             
              
              
               
            
            
            
                    

               
                        
               
                        
                   
            
                

        
        
        

                
            

            
                    

                    
                       

   
   
    
   
    


 


  


 

 




                    
                    
                
                    
               