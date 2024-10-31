import express from "express";
import cors from "cors";

const app=express();
app.use(cors());

app.get("/getData",(req,res)=>{
    res.send("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas viverra nisl in erat suscipit consequat. In mattis malesuada libero, ac iaculis nibh ultrices sollicitudin. Aenean est turpis, porta et enim eu, cursus posuere velit. Donec eleifend accumsan nisi, ac ultricies eros congue ut. Sed a ultricies diam. Etiam iaculis tellus nec dolor rhoncus, maximus egestas metus condimentum. Sed vitae augue non eros elementum consequat. Etiam placerat nunc est, non porttitor nisi finibus dapibus. Sed vel dolor hendrerit, gravida tortor sed, malesuada arcu. Ut nec ullamcorper sapien. Duis tincidunt sapien commodo purus consequat auctor. Donec massa massa, eleifend non mollis ac, fringilla ut ante. Ut eleifend ut nibh eget scelerisque. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut volutpat ultrices laoreet.")
});

app.listen(5000,()=>console.log("app is running"));
