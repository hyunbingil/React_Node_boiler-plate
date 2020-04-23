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