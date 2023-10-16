const posts=[
    {title:'Post One', Body:'This is post one'},
    {title:'Post Two', Body:'This is post two'},
    {title:'Post Three', Body:'This is post three'}
];

function getPosts(){

    setTimeout(()=>{
        let output="";
        posts.forEach((post, index)=>{
            output+= `<li>${post.title}</li>`;
        })
        document.body.innerHTML=output;
    }, 2000)
}

function createPost(post){

    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            posts.push(post);

            const error =false;
            if(!error){
                resolve();
            }else{
                reject('Error creating post');
            }

        },1000);
    })
    
}


// createPost({title:'Post Four', Body:'This is post four'})
// .then(getPosts).catch(err=>console.error(err));

const promise1 = Promise.resolve('Hello Love');
const promise2 =10;
const promise3= new Promise((resolve, reject)=>setTimeout(resolve,2000,'Goodbye'));

const promise4= fetch('https://jsonplaceholder.typicode.com/users')
.then(res =>res.json());
Promise.all([promise1,promise2,promise3,promise4]).then(value=>console.log(value));