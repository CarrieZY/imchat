import Regist from "../pages/register";

const userState=({
	
});

export const user=(state = userState, action) => {
	switch(action.type) {
		default:
			return state;
	}
}


export const  register=(user,pwd,repeatpwd)=>{
    if(!user||!pwd){
        console.log('用户名必须输入')
    }
    if(repeatpwd!=pwd){
        console.log('密码必须一致')
    }
}

// export function register({user,pwd,repeatpwd,type}){
//     if (!user||!pwd||!type) {
//         return errorMsg('用户名密码必须输入')
//     }
//     if (pwd!==repeatpwd) {
//         return errorMsg('密码和确认密码不同')
//     }
//     //redux异步操作数据
//     return dispatch=>{
//         axios.post('/user/register',{user,pwd,type})
//             .then(res=>{
//                 if (res.status==200&&res.data.code===0) {
//                     dispatch(registerSuccess({user,pwd,type}))
//                 }else{
//                     dispatch(errorMsg(res.data.msg))
//                 }
//             })     
//     }
 
// }　　