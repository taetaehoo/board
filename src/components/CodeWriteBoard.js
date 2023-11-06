import React, { useState } from 'react'
import styles from '../styles/CodeWriteBoard.module.css'
import AceEditor from 'react-ace';
import "ace-builds/src-noconflict/ace";
import "ace-builds/src-noconflict/worker-json";
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-min-noconflict/theme-github';


function CodeWriteBoard() {
    const [codeVal, setCodeVal] = useState('');

  return (
    
        <AceEditor
            placeholder="Placeholder Text"
            mode="javascript"
            theme="github"
            
  
            showPrintMargin={true}
            showGutter={true}
            highlightActiveLine={true}
            value={codeVal}
            onChange={value => setCodeVal(value)}
            name="code-editor"
            editorProps={{$blockScrolling: true}}
            className={styles['ace-editor']}
            setOptions={{
                showLineNumbers: true,
                tabSize: 2,
  }}/>
    
  )
}

export default CodeWriteBoard
