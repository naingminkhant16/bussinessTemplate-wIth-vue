<template>
   <!-- frequently asked questions  -->
    <div class="questions-container">
        <h2>Frequently asked questions</h2>
        <div class="container">
            <div class="row row-cols-1 row-cols-md-2 g-4 text-start">
                <div class="col">
                    <h5>Which code editor would you recommand?</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sint laborum ea tempora mollitia
                        corrupti in fugit amet laudantium fuga?</p>
                </div>
                <div class="col">
                    <h5>How can I contact you?</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sint laborum ea tempora mollitia
                        corrupti in fugit amet laudantium fuga?</p>
                </div>
                <div class="col">
                    <h5>What is your strongest programming language?</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sint laborum ea tempora mollitia
                        corrupti in fugit amet laudantium fuga?</p>
                </div>
                <div class="col">
                    <h5>What king of developer are you,font-end or back-end?</h5>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam sint laborum ea tempora mollitia
                        corrupti in fugit amet laudantium fuga?</p>
                </div>
            </div>
        </div>
        <div class="question-sub-container">
            <blockquote class="text-start">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellat exercitationem
                accusantium cumque
                officiis sapiente laborum culpa suscipit maxime perspiciatis unde alias quas quis earum, mollitia sit
                harum. Magni, minus esse!</blockquote>
            <button class="btn">Learn More>></button>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
/* questions  */
.questions-container{
    text-align: center;
    padding: 80px 0px;

}
.questions-container .container{
    margin-top: 80px;
}
.question-sub-container{
    margin: 10px auto;
    width: 85%;
    /* border: 1px solid orange; */
    border-radius: 10px;
    padding: 20px;
    background-color: #eee;
}
.question-sub-container blockquote{
    font-size: 1.2em;
    letter-spacing: 0.06rem;
}
.questions-container .question-sub-container .btn{
    float:right;
    background-color: orange;
    color: honeydew;
    transition: 0.7s ease-in-out;
}
.questions-container .question-sub-container .btn:hover{
    transform: scale(1.1);
    color: black;
}
</style>