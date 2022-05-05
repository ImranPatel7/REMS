var mysql =require("mysql");
var express =require("express");
var app = express();
var cors =require("cors");
const multer = require('multer');
const path=require("path");
const { query } = require("express");




var con=mysql.createConnection(
    {
        host:"localhost",
        user:"root",
        password:"",
        database:"rems",
    }
);


app.use(express.json());
app.use(cors());
app.use("/public", express.static("public"));

con.connect(function(err)
{
    if(err) throw err;
    console.log("connected!");
}
);


app.post("/api/insert",(req,resp)=>{
    
    var username = req.body.name;
    var useremail = req.body.email;
    var userpass = req.body.pass;

    const query="Insert into signup (uname,uemail,upass) values(?,?,?)";
    con.query(query,[username,useremail,userpass]);
    resp.json("");
});


app.post("/api/verify",(req,resp)=>{
    
    var useremail= req.body.email;
    var userpass= req.body.pass;

    useremail = null
    const query="Select * from signup where uemail=? and upass=?";
    con.query(query,[useremail,userpass],(err,result, fields)=>{
        console.log("user email", useremail);
        console.log("user password", userpass);
        console.log("Result", result);
        console.log("Error", err); 
        if(result.length > 0)
        {
            resp.send(result);
        }
        else
        {
            resp.send({message:"wrong email id and password"});
        }
    });
    //resp.json("");
})


app.get('/',function(req,resp)
{
    con.query("select * from signup" , function(error,rows)
    {
        if(!!error)
        {
            console.log("error");
        }
        else
        {
            console.log("success!");
            console.log(rows[0].username);
            resp.json(rows);
        }
    }    
    );
})

const storage=multer.diskStorage({
    destination:path.join(__dirname,'./public/'),
    filename: function(req, file, callback) {
        callback(null, Date.now() + '-' + path.extname(file.originalname))
}
}

)


app.post("/api/up", (req,res)=>{
    let upload=multer({storage:storage}).single('image');
    upload (req,res,function(err)
    {
        console.log(err);
    if(!req.file)
    {
        console.log("Not found");
    }
    
    else{

        var imgsrc =req.file.filename;

        console.log(imgsrc);
        var ProAddress = req.body.address;
        var ProArea = req.body.parea;
        var ProBedrooms = req.body.bed;
        var ProHalls = req.body.halls;
        var ProKitchens = req.body.kitchens;
        var ProRent = req.body.prent;
    

        
        const query="Insert into upload (proadd,area,beds,hall,kitchen,rent,img) values(?,?,?,?,?,?,?)";
        con.query(query,[ProAddress,ProArea,ProBedrooms,ProHalls,ProKitchens,ProRent,imgsrc]);
        res.json("");
    }
    })
    });



    app.post("/api/contact",(req,resp)=>{
    
        var localname = req.body.cusname;
        var localemail = req.body.cusemail;
        var localsub = req.body.cussub;
        var localmsg = req.body.cusmsg;
    
        const query="Insert into contact (lname,lemail,subject,msg) values(?,?,?,?)";
        con.query(query,[localname,localemail,localsub,localmsg]);
        resp.json("");
    });


app.get('/api/dis',(req,resp)=>{
        const ins = "select * from signup";
        con.query(ins,(err,result)=>{
            console.log(result);
            resp.send(result);
        });
    });


app.get('/api/prodis',(req,resp)=>{
        const ins = "select * from upload";
        con.query(ins,(err,result)=>{
            console.log(result);
            resp.send(result);
        });
    });

app.get('/api/feedbackdis',(req,resp)=>{
        const ins = "select * from contact";
        con.query(ins,(err,result)=>{
            console.log(result);
            resp.send(result);
        });
    });


app.get('/api/property_fetch', (req,resp)=>{
        // console.log("HI iam in API");
     
         const ins="SELECT * FROM upload LIMIT 3 ";
     con.query(ins,(err,result)=>{
         console.log(result);
     resp.send(result);
     });
     
     });

     app.get('/api/property_fetch1', (req,resp)=>{
        // console.log("HI iam in API");
     let param=req.query.pid;
         const ins="select * from upload where P_id=?";
     con.query(ins,[param],(err,result)=>{
         console.log(result);
     resp.send(result);
     });
     
     });

     app.get('/api/property_fetch_all', (req,resp)=>{
        // console.log("HI iam in API");
     
         const ins="SELECT * FROM upload";
     con.query(ins,(err,result)=>{
         console.log(result);
     resp.send(result);
     });
     
     });

  



    
app.listen(1337);