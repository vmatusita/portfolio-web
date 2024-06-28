const projectsContent = document.getElementById('projects');

function getApiGithub() {
    fetch("https://api.github.com/users/vmatusita/repos")
        .then(async res => {
            if (!res.ok) {
                throw new Error (res.status);
            }

            let data = await res.json();
            data.map (item => {
                let project = document.createElement('div')
                let number = data.indexOf(item) + 1;

                project.innerHTML = 
                `
                <div class="mb-5">
                    <p class="mb-4"><span class="text-customPurple font-bold">Projeto ${number}</span> / ${item.name}</p>
                    <div class="bg-customCode p-8 rounded-xl border border-customLine break-words">
                        <p class="mb-1"><span class="text-customOrange">Tecnologias:</span> ${item.language}</p>
                        <p class="mb-1"><span class="text-customOrange">URL:</span> <a class="underline" href="${item.html_url}" target=_blank">${item.html_url}</a></p>
                        <p class="mb-1"><span class="text-customOrange">Homepage:</span> <a class="underline" href="${item.homepage}" target=_blank">${item.homepage}</a></p>
                        <p class="mb-1"><span class="text-customOrange">Descrição:</span> ${item.description}</p>
                    </div>
                </div>
                `;

                projectsContent.appendChild(project);
            })
        })

}
getApiGithub()