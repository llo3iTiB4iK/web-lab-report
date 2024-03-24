const nav = document.getElementsByTagName("nav")[0];
const sidebar = document.getElementsByTagName("aside")[0];
const content_area = document.getElementById("content_area");
fetch('structure.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Помилка завантаження файлу structure.json');
        }
        return response.json();
    })
    .then(jsonData => {
        fillNav(jsonData);
    })
    .catch(error => {
        let navText = document.createElement("button");
        navText.innerText = error;
        navText.style.width = '100%';
        nav.appendChild(navText);
    });

function fillNav(data) {
    Object.entries(data).forEach(function ([button_id, button_data]) {
        let navButton = document.createElement("button");
        navButton.id = button_id;
        navButton.innerText = button_data["name"];
        nav.appendChild(navButton);
        navButton.onclick = function() {
            sidebar.innerHTML = "";
            content_area.innerHTML = "";
            Object.entries(button_data["sections"]).forEach(function ([section_name, filename]) {
                let asideButton = document.createElement("button");
                asideButton.innerHTML = section_name;
                sidebar.append(asideButton);
                asideButton.onclick = function() {
                    const full_path = button_data["path"] + filename;
                    fetch(full_path)
                        .then(response => {
                            if (!response.ok) {
                                throw new Error(`Помилка завантаження файлу ${full_path}`);
                            }
                            return response.text();
                        })
                        .then(htmlData => {
                            content_area.innerHTML = htmlData;
                        })
                        .catch(error => {
                            content_area.innerText = error;
                        });
                }
            })
        }
    });
}