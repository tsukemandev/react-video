import React from "react";



export default function Upload(props) {

    async function uploadFileInChunks(file) {
        const chunkSize = 1024 * 1024 * 10; // 예: 10MB 단위로 청크 분할
        let start = 0;
        let cnt = 0;
        // 파일을 청크로 나누어 전송
        while (start < file.size) {
            let end = Math.min(start + chunkSize, file.size);
            let chunk = file.slice(start, end);
            let is_last_chunk = end >= file.size
    
            // 청크를 서버로 전송
            await fetch('http://localhost:8000/upload', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/octet-stream',
                    'Chunk-Start': start,
                    'Chunk-End': end,
                    'File-Name': file.name + '_chunk_' + cnt,
                    'Last-Chunk': is_last_chunk,
                },
                body: chunk
            });
            console.log('file size : ' + file.size + '   file end : ' + end + '    is_last_chunk : ' + is_last_chunk)
            cnt++
            start = end;

            if (is_last_chunk) {
                alert('파일 업로드가 완료되었습니다.')
            }
        }
    }

    function uploadFile2() {
        const input = document.getElementById('upload');
        const file = input.files[0];

        uploadFileInChunks(file)
    }

    function uploadFile() {
        const input = document.getElementById('upload');
        const file = input.files[0];
        const formData = new FormData();
    
        // FormData 인스턴스에 파일 추가
        formData.append('file', file);
    
        // 'fetch'를 사용하여 파일 전송
        fetch('http://localhost:8000/upload', { // 여기서 'YOUR_SERVER_ENDPOINT'는 서버의 엔드포인트 URL로 대체해야 합니다.
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
    }
    

    return (
        <div>
            <h2>영상 업로드</h2>
            <h4>Foundation CSS Forms File Upload Button</h4>
            <form onSubmit={(event) => {
                event.preventDefault();
            }}>
                <label htmlFor="upload"
                    className={"button"}>
                    Upload Your File
                </label>
                <input type="file"
                    id="upload"
                    name="upload-video"
                    className={"show-for-sr"} />
                <br></br>
                <br></br>
                <button type="submit" className="button" onClick={uploadFile2}>업로드</button>
            </form>
        </div>
    )
}