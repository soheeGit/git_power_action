async function makeIssue() {
    const token = Process.env.GITHUB_TOKEN;
    const OWNER = "soheeGit";
    const REPO = "git_power_action";
    const response = await fetch(`https://api.github.com/repos/${OWNER}/${REPO}/issues`, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
            title: "행운의 숫자",
            body: `${Math.floor(Math.random() * 100) + 1}`,
        })
    });
    if(response.ok){
        console.log("성공");
    }else{
        console.log("실패");
    }
}

makeIssue();