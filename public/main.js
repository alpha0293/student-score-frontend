document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("call-api");
  const resultBox = document.getElementById("result");

  btn.addEventListener("click", async () => {
    resultBox.textContent = "Loading...";

    try {
      const response = await fetch("https://your-api-server.com/api/hello");
      if (!response.ok) throw new Error("API error!");

      const data = await response.json();
      resultBox.textContent = "Kết quả từ API: " + JSON.stringify(data);
    } catch (error) {
      resultBox.textContent = "Lỗi: " + error.message;
    }
  });
});
