document.addEventListener("DOMContentLoaded", () => {
    // Variables
    let counter = document.getElementById("counter");
    let plusButton = document.getElementById("plus");
    let minusButton = document.getElementById("minus");
    let heartButton = document.getElementById("heart");
    let pauseButton = document.getElementById("pause");
    let submitButton = document.getElementById("submit");
    let likesList = document.querySelector(".likes");
    let commentForm = document.getElementById("comment-form");
    let commentList = document.getElementById("list");
    let isPaused = false;
    let timer;

    // Timer Function
    function startTimer() {
        timer = setInterval(() => {
            if (!isPaused) {
                counter.innerText = parseInt(counter.innerText) + 1;
            }
        }, 1000);
    }
    startTimer();

    // Plus Button
    plusButton.addEventListener("click", () => {
        counter.innerText = parseInt(counter.innerText) + 1;
    });

    // Minus Button
    minusButton.addEventListener("click", () => {
        counter.innerText = parseInt(counter.innerText) - 1;
    });

    // Like Button
    heartButton.addEventListener("click", () => {
        const currentNumber = counter.innerText;
        let existingLike = document.querySelector(`[data-num="${currentNumber}"]`);
        
        if (existingLike) {
            let likeCount = parseInt(existingLike.dataset.count) + 1;
            existingLike.dataset.count = likeCount;
            existingLike.innerText = `${currentNumber} has been liked ${likeCount} times.`;
        } else {
            let newLike = document.createElement("li");
            newLike.dataset.num = currentNumber;
            newLike.dataset.count = 1;
            newLike.innerText = `${currentNumber} has been liked 1 time.`;
            likesList.appendChild(newLike);
        }
    });

    // Pause Button
    pauseButton.addEventListener("click", () => {
        if (isPaused) {
            isPaused = false;
            pauseButton.innerText = "pause";
            plusButton.disabled = false;
            minusButton.disabled = false;
            heartButton.disabled = false;
            submitButton.disabled = false;
            startTimer();
        } else {
            isPaused = true;
            pauseButton.innerText = "resume";
            plusButton.disabled = true;
            minusButton.disabled = true;
            heartButton.disabled = true;
            submitButton.disabled = true;
            clearInterval(timer);
        }
    });

    // Comment Submission
    commentForm.addEventListener("submit", (e) => {
        e.preventDefault();
        const commentInput = document.getElementById("comment-input");
        const newComment = document.createElement("p");
        newComment.innerText = commentInput.value;
        commentList.appendChild(newComment);
        commentInput.value = ""; // Clear the input field
    });
});
