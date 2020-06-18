import labelsEn from "@/lang/en/labels.js";
import labelsEs from "@/lang/es/labels.js";
import paragraphsEn from "@/lang/en/paragraphs.js";
import paragraphsEs from "@/lang/es/paragraphs.js";



var lang="es";
var labels = {}
var paragraphs = {}

if(lang==='es'){
    labels=labelsEs.labels_es;
    paragraphs=paragraphsEs.paragraphs;
}else{
    labels=labelsEn.labels_en;
    paragraphs=paragraphsEn.paragraphs;
}
export {
    labels,
    paragraphs
}