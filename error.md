### npm start 에러(events.js:187)
```
events.js:187
      throw er; // Unhandled 'error' event
      ^

Error: spawn cmd ENOENT
    at Process.ChildProcess._handle.onexit (internal/child_process.js:264:19)
    at onErrorNT (internal/child_process.js:456:16)
    at processTicksAndRejections (internal/process/task_queues.js:80:21) 
Emitted 'error' event on ChildProcess instance at:
    at Process.ChildProcess._handle.onexit (internal/child_process.js:270:12)
    at onErrorNT (internal/child_process.js:456:16)
    at processTicksAndRejections (internal/process/task_queues.js:80:21) 
{
  errno: 'ENOENT',
  code: 'ENOENT',
  syscall: 'spawn cmd',
  path: 'cmd',
  spawnargs: [ '/s', '/c', 'start', '""', '/b', '"http://localhost:3000"' ]
}
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! client@0.1.0 start: `react-scripts start`
npm ERR! Exit status 1
npm ERR!
npm ERR! Failed at the client@0.1.0 start script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
```
### 해결방법
: react-scripts 버전을 낮추면 된다.\
: ```npm install react-scripts@2.1.8```
> 블로그에서 발견했었는데, 블로그에 오타가 있어서 계속 안되고 있었다😢
>> 구글링하는데 영어 공부해야겠다는 생각이 또 들었다.
>>> 내 1시간...................

### npm 경로 지정
: 🤷‍♀️node 부분을 이 폴더에서 작업했다가 server로 옮기니까 backend 서버 실행할 때 파일을 찾을 수 없다고 뜨는데경로를 바꾸어서 실행해야하는거같다 . . . 어케 하지? 막혔다 ㅠㅡㅠ\
: ```npm run backend --modules-folder ./server```로 폴더로 경로 바꿔주면 돌아간다... 찾았다 ㅠㅠㅠㅠㅠㅠ\
=> 그럴 필요 없었음. backend라는 스크립트 경로를 바꿔주면 되는 문제 ... 화가 나네요

### concurrently 설정할 때
: 다른 폴더 안에 있는 script 사용하려면
```
npm run start --prefix client
```
> client에 있는 start 사용하겠다.

### concurrently 안되는 중...
```
[0] Error occurred when executing command: npm run backend
[0] Error: spawn cmd.exe ENOENT
[0]     at Process.ChildProcess._handle.onexit (internal/child_process.js:264:19)
[0]     at onErrorNT (internal/child_process.js:456:16)
[0]     at processTicksAndRejections (internal/process/task_queues.js:80:21)
[1] Error occurred when executing command: npm run start --prefix client
[1] Error: spawn cmd.exe ENOENT
[1]     at Process.ChildProcess._handle.onexit (internal/child_process.js:264:19)
[1]     at onErrorNT (internal/child_process.js:456:16)
[1]     at processTicksAndRejections (internal/process/task_queues.js:80:21)
[1] npm run start --prefix client exited with code -4058
[0] npm run backend exited with code -4058
npm ERR! code ELIFECYCLE
npm ERR! errno 1
npm ERR! node.react@1.0.0 devv: `concurrently "npm run backend" "npm run start --prefix client"`
npm ERR! Exit status 1
npm ERR!
npm ERR! Failed at the node.react@1.0.0 devv script.
npm ERR! This is probably not a problem with npm. There is likely additional logging output above.
```