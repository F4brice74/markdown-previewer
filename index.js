const {Grid} = MaterialUI
const {Paper} = MaterialUI
const {Button} = MaterialUI

function Markdown() {
  
const firstLoadMarkdow = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`; 
  

const [value, setValue] = React.useState(firstLoadMarkdow);  
function handleChange(event){
    setValue(event.target.value)
  }
  
  return (
    <div> 
    <Grid container 
    container
    direction="row"
    justify="center"
    alignItems="center">
   <Grid item container xs={8} justify="center" alignItems="center" id="container">  
     
     <Grid item xs={10}> 
       <div className="headingtext">Editor <span className="subtext">Write your markdown just below :</span></div>
      
       <div id="areacontainer">
<textarea id="editor" name="story" value={value} onChange={handleChange} />
       </div>
         </Grid>
          
     
     <Grid item xs={10}  justify="center">
       <div className="headingtext">Previewer <span className="subtext">view transcription :</span></div>
       <div id="preview" dangerouslySetInnerHTML={{
        __html: marked(value)
      }}></div>
      </Grid>
    </Grid>        
  </Grid>
  </div> 
 
    
      
  )
}


 
ReactDOM.render(
  <Markdown />, document.getElementById("root")

)
