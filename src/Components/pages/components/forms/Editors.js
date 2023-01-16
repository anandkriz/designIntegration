import React, { useState,  useRef } from 'react'
import { BreadCrumb } from '../../Dashboard2Components/Breadcrumb'
import { CardTitle } from '../UiElements/General'
import JoditEditor from 'jodit-react';
import CodeMirror from '@uiw/react-codemirror';
// import { javascript } from '@codemirror/lang-javascript';
// import CodeMirror from "@uiw/react-codemirror";
// import { markdown, markdownLanguage } from "@codemirror/lang-markdown";
// import { languages } from "@codemirror/language-data";

function Editors() {
    const editor = useRef(null);
    const [content, setContent] = useState('');

    const onChange = React.useCallback((value, viewUpdate) => {
        console.log('value:', value);
      }, []);
    return (
        <div class="content-wrapper">
            <BreadCrumb heading="Text Editors" />
            <section class="content">
                <div class="row">
                    <div class="col-md-12">
                        <div class="card card-outline card-info">
                            <CardTitle title="Summernote" />
                            <div class="card-body">
                                <JoditEditor
                                    ref={editor}
                                    value={content}
                                    onChange={newContent => setContent(newContent)}
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-12">
                        <div class="card card-outline card-info">
                            <CardTitle title="CodeMirror" />
                            <div class="card-body p-0">
                                {/* <textarea id="codeMirrorDemo" class="p-3">
                                    <div class="info-box bg-gradient-info">
                                        <span class="info-box-icon"><i class="far fa-bookmark"></i></span>
                                        <div class="info-box-content">
                                            <span class="info-box-text">Bookmarks</span>
                                            <span class="info-box-number">41,410</span>
                                            <div class="progress">
                                                <div class="progress-bar" style="width: 70%"></div>
                                            </div>
                                            <span class="progress-description">
                                                70% Increase in 30 Days
                                            </span>
                                        </div>
                                    </div>
                                </textarea> */}
                                <CodeMirror
                                value={content}
                                    // value="console.log('hello world!');"
                                    height="200px"
                                    // extensions={[javascript({ jsx: true })]}
                                    onChange={onChange}
                                />

                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Editors