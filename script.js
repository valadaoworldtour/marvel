const timelineData = [
    // Anos 90
    { phase: 'Anos 90', title: 'X-Men: A Série Animada (Temporada 1)', year: '1992-1993', type: 'Animação' },
    { phase: 'Anos 90', title: 'X-Men: A Série Animada (Temporada 2)', year: '1993-1994', type: 'Animação' },
    { phase: 'Anos 90', title: 'X-Men: A Série Animada (Temporada 3)', year: '1994-1995', type: 'Animação' },
    { phase: 'Anos 90', title: 'X-Men: A Série Animada (Temporada 4)', year: '1995-1996', type: 'Animação' },
    { phase: 'Anos 90', title: 'X-Men: A Série Animada (Temporada 5)', year: '1996-1997', type: 'Animação' },

    // Anos 2000
    { phase: 'Anos 2000', title: 'X-Men: O Filme', year: '2000', type: 'Filme' },
    { phase: 'Anos 2000', title: 'X-Men 2', year: '2003', type: 'Filme' },
    { phase: 'Anos 2000', title: 'Demolidor: O Homem Sem Medo', year: '2003', type: 'Filme' },
    { phase: 'Anos 2000', title: 'O Justiceiro', year: '2004', type: 'Filme' },
    { phase: 'Anos 2000', title: 'Elektra', year: '2005', type: 'Filme' },
    { phase: 'Anos 2000', title: 'Quarteto Fantástico', year: '2005', type: 'Filme' },
    { phase: 'Anos 2000', title: 'X-Men: O Confronto Final', year: '2006', type: 'Filme' },
    { phase: 'Anos 2000', title: 'Quarteto Fantástico e o Surfista Prateado', year: '2007', type: 'Filme' },
    { phase: 'Anos 2000', title: 'X-Men Origens: Wolverine', year: '2009', type: 'Filme' },
    
    // Fase Um
    { phase: 'Fase Um', title: 'Capitão América: O Primeiro Vingador', year: '1942-1945', type: 'Filme' },
    { phase: 'Fase Um', title: 'Agent Carter', year: '1946-1947', type: 'Série' },
    { phase: 'Fase Um', title: 'Capitã Marvel', year: '1995', type: 'Filme' },
    { phase: 'Fase Um', title: 'Homem de Ferro', year: '2010', type: 'Filme' },
    { phase: 'Fase Um', title: 'Homem de Ferro 2', year: '2011', type: 'Filme' },
    { phase: 'Fase Um', title: 'X-Men: Primeira Classe', year: '2011', type: 'Filme' },
    { phase: 'Fase Um', title: 'O Incrível Hulk', year: '2011', type: 'Filme' },
    { phase: 'Fase Um', title: 'Thor', year: '2011', type: 'Filme' },
    { phase: 'Fase Um', title: 'Os Vingadores', year: '2012', type: 'Filme' },

    // Fase Dois
    { phase: 'Fase Dois', title: 'Homem de Ferro 3', year: '2012', type: 'Filme' },
    { phase: 'Fase Dois', title: 'Wolverine: Imortal', year: '2013', type: 'Filme' },
    { phase: 'Fase Dois', title: 'Agentes da S.H.I.E.L.D. (Temporada 1, Eps 1-7)', year: '2013', type: 'Série' },
    { phase: 'Fase Dois', title: 'Thor: O Mundo Sombrio', year: '2013', type: 'Filme' },
    { phase: 'Fase Dois', title: 'Agentes da S.H.I.E.L.D. (Temporada 1, Eps 8-16)', year: '2014', type: 'Série' },
    { phase: 'Fase Dois', title: 'X-Men: Dias de um Futuro Esquecido', year: '2014', type: 'Filme' },
    { phase: 'Fase Dois', title: 'Capitão América: O Soldado Invernal', year: '2014', type: 'Filme' },
    { phase: 'Fase Dois', title: 'Agentes da S.H.I.E.L.D. (Temporada 1, Eps 17-22)', year: '2014', type: 'Série' },
    { phase: 'Fase Dois', title: 'Guardiões da Galáxia (Curtas)', year: 'Pré-2014 (Origens)', type: 'Animação' },
    { phase: 'Fase Dois', title: 'Guardiões da Galáxia', year: '2014', type: 'Filme' },
    { phase: 'Fase Dois', title: 'Guardiões da Galáxia Vol. 2', year: '2014', type: 'Filme' },
    { phase: 'Fase Dois', title: 'Eu Sou Groot', year: '2014', type: 'Animação' },
    { phase: 'Fase Dois', title: 'Agentes da S.H.I.E.L.D. (Temporada 2, Eps 1-19)', year: '2015', type: 'Série' },
    { phase: 'Fase Dois', title: 'Quarteto Fantástico', year: '2015', type: 'Filme' },
    { phase: 'Fase Dois', title: 'Demolidor (Temporada 1)', year: '2015', type: 'Série' },
    { phase: 'Fase Dois', title: 'Jessica Jones (Temporada 1)', year: '2015', type: 'Série' },
    { phase: 'Fase Dois', title: 'Vingadores: Era de Ultron', year: '2015', type: 'Filme' },
    { phase: 'Fase Dois', title: 'Agentes da S.H.I.E.L.D. (Temporada 2, Eps 20-22)', year: '2015', type: 'Série' },
    { phase: 'Fase Dois', title: 'Homem-Formiga', year: '2015', type: 'Filme' },

    // Fase Três
    { phase: 'Fase Três', title: 'Deadpool', year: '2016', type: 'Filme' },
    { phase: 'Fase Três', title: 'X-Men: Apocalipse', year: '2016', type: 'Filme' },
    { phase: 'Fase Três', title: 'Agentes da S.H.I.E.L.D. (Temporada 3, Eps 1-19)', year: '2016', type: 'Série' },
    { phase: 'Fase Três', title: 'Capitão América: Guerra Civil', year: '2016', type: 'Filme' },
    { phase: 'Fase Três', title: 'Demolidor (Temporada 2)', year: '2016', type: 'Série' },
    { phase: 'Fase Três', title: 'Luke Cage (Temporada 1)', year: '2016', type: 'Série' },
    { phase: 'Fase Três', title: 'Agentes da S.H.I.E.L.D. (Temporada 3, Eps 20-22)', year: '2016', type: 'Série' },
    { phase: 'Fase Três', title: 'Viúva Negra', year: '2016', type: 'Filme' },
    { phase: 'Fase Três', title: 'Pantera Negra', year: '2016', type: 'Filme' },
    { phase: 'Fase Três', title: 'Homem-Aranha: De Volta ao Lar', year: '2016', type: 'Filme' },
    { phase: 'Fase Três', title: 'Agentes da S.H.I.E.L.D. (Temporada 4, Eps 1-8)', year: '2016', type: 'Série' },
    { phase: 'Fase Três', title: 'Doutor Estranho', year: '2016-2017', type: 'Filme' },
    { phase: 'Fase Três', title: 'Logan', year: '2017', type: 'Filme' },
    { phase: 'Fase Três', title: 'Punho de Ferro (Temporada 1)', year: '2017', type: 'Série' },
    { phase: 'Fase Três', title: 'Os Defensores', year: '2017', type: 'Série' },
    { phase: 'Fase Três', title: 'Inumanos', year: '2017', type: 'Série' },
    { phase: 'Fase Três', title: 'Justiceiro (Temporada 1)', year: '2017', type: 'Série' },
    { phase: 'Fase Três', title: 'The Runaways (Temporada 1)', year: '2017-2018', type: 'Série' },
    { phase: 'Fase Três', title: 'Thor: Ragnarok', year: '2017', type: 'Filme' },
    { phase: 'Fase Três', title: 'Agentes da S.H.I.E.L.D. (Temporada 5, Eps 1-18)', year: '2017-2018', type: 'Série' },
    { phase: 'Fase Três', title: 'Deadpool 2', year: '2018', type: 'Filme' },
    { phase: 'Fase Três', title: 'Venom', year: '2018', type: 'Filme' },
    { phase: 'Fase Três', title: 'Vingadores: Guerra Infinita', year: '2018', type: 'Filme' },
    { phase: 'Fase Três', title: 'Homem-Formiga e a Vespa', year: '2018', type: 'Filme' },
    { phase: 'Fase Três', title: 'Jessica Jones (Temporada 2)', year: '2018', type: 'Série' },
    { phase: 'Fase Três', title: 'Luke Cage (Temporada 2)', year: '2018', type: 'Série' },
    { phase: 'Fase Três', title: 'Punho de Ferro (Temporada 2)', year: '2018', type: 'Série' },
    { phase: 'Fase Três', title: 'Manto e Adaga (Temporada 1)', year: '2018', type: 'Série' },
    { phase: 'Fase Três', title: 'Demolidor (Temporada 3)', year: '2018', type: 'Série' },
    { phase: 'Fase Três', title: 'The Runaways (Temporada 2)', year: '2018-2019', type: 'Série' },
    { phase: 'Fase Três', title: 'Agentes da S.H.I.E.L.D. (Temporada 5, Eps 19-22)', year: '2018', type: 'Série' },
    { phase: 'Fase Três', title: 'Vingadores: Ultimato', year: '2018-2023', type: 'Filme' },
    { phase: 'Fase Três', title: 'X-Men: Fênix Negra', year: '2019', type: 'Filme' },
    { phase: 'Fase Três', title: 'Justiceiro (Temporada 2)', year: '2019', type: 'Série' },
    { phase: 'Fase Três', title: 'Jessica Jones (Temporada 3)', year: '2019', type: 'Série' },
    { phase: 'Fase Três', title: 'Manto e Adaga (Temporada 2)', year: '2019', type: 'Série' },
    { phase: 'Fase Três', title: 'Agentes da S.H.I.E.L.D. (Temporada 6)', year: '2019', type: 'Série' },
    { phase: 'Fase Três', title: 'The Runaways (Temporada 3)', year: '2019', type: 'Série' },
    { phase: 'Fase Três', title: 'Agentes da S.H.I.E.L.D. (Temporada 7)', year: '2020', type: 'Série' },
    { phase: 'Fase Três', title: 'Os Novos Mutantes', year: '2020', type: 'Filme' },

    // Fase Quatro
    { phase: 'Fase Quatro', title: 'Venom: Tempo de Carnificina', year: '2021', type: 'Filme' },
    { phase: 'Fase Quatro', title: 'Morbius', year: '2022', type: 'Filme' },
    { phase: 'Fase Quatro', title: 'Loki (Temporada 1)', year: 'Fora do Tempo', type: 'Série' },
    { phase: 'Fase Quatro', title: 'What If...?', year: 'Multiverso', type: 'Animação' },
    { phase: 'Fase Quatro', title: 'WandaVision', year: '2023', type: 'Série' },
    { phase: 'Fase Quatro', title: 'Falcão e o Soldado Invernal', year: '2023', type: 'Série' },
    { phase: 'Fase Quatro', title: 'Shang-Chi e a Lenda dos Dez Anéis', year: '2023', type: 'Filme' },
    { phase: 'Fase Quatro', title: 'Eternos', year: '2023', type: 'Filme' },
    { phase: 'Fase Quatro', title: 'Homem-Aranha: Longe de Casa', year: '2024', type: 'Filme' },
    { phase: 'Fase Quatro', title: 'Homem-Aranha: Sem Volta para Casa', year: '2024', type: 'Filme' },
    { phase: 'Fase Quatro', title: 'Doutor Estranho no Multiverso da Loucura', year: '2025', type: 'Filme' },
    { phase: 'Fase Quatro', title: 'Gavião Arqueiro', year: '2024', type: 'Série' },
    { phase: 'Fase Quatro', title: 'Cavaleiro da Lua', year: '2025', type: 'Série' },
    { phase: 'Fase Quatro', title: 'Mulher-Hulk: Defensora de Heróis', year: '2025', type: 'Série' },
    { phase: 'Fase Quatro', title: 'Ms. Marvel', year: '2025', type: 'Série' },
    { phase: 'Fase Quatro', title: 'Thor: Amor e Trovão', year: '2025', type: 'Filme' },
    { phase: 'Fase Quatro', title: 'Pantera Negra: Wakanda para Sempre', year: '2025', type: 'Filme' },
    { phase: 'Fase Quatro', title: 'Guardiões da Galáxia: Especial de Festas', year: '2022', type: 'Especial' },
    { phase: 'Fase Quatro', title: 'Homem-Formiga e a Vespa: Quantumania', year: '2025', type: 'Filme' },

    // Fase Cinco
    { phase: 'Fase Cinco', title: 'Guardiões da Galáxia Vol. 3', year: '2026', type: 'Filme' },
    { phase: 'Fase Cinco', title: 'Invasão Secreta', year: '2026', type: 'Série' },
    { phase: 'Fase Cinco', title: 'Loki (Temporada 2)', year: 'Out of Time', type: 'Série' },
    { phase: 'Fase Cinco', title: 'As Marvels', year: '2026', type: 'Filme' },
    { phase: 'Fase Cinco', title: 'X-Men 97', year: '2024', type: 'Animação' },
    { phase: 'Fase Cinco', title: 'Eco', year: '2024', type: 'Série' },
    { phase: 'Fase Cinco', title: 'What If...? (Temporada 2)', year: 'Multiverso', type: 'Animação' },
    { phase: 'Fase Cinco', title: 'Olhos de Wakanda', year: 'TBA', type: 'Animação' },
    { phase: 'Fase Cinco', title: 'Marvel Zombies', year: 'TBA', type: 'Animação' },
    { phase: 'Fase Cinco', title: 'Deadpool & Wolverine', year: '2024', type: 'Filme' },
    { phase: 'Fase Cinco', title: 'Agatha: Diários de Darkhold', year: '2024', type: 'Série' },
    { phase: 'Fase Cinco', title: 'Capitão América: Admirável Mundo Novo', year: '2025', type: 'Filme' },
    { phase: 'Fase Cinco', title: 'Demolidor: Nascido de Novo', year: 'TBA', type: 'Série' },
    { phase: 'Fase Cinco', title: 'Thunderbolts', year: '2025', type: 'Filme' },
    { phase: 'Fase Cinco', title: 'Coração de Ferro', year: 'TBA', type: 'Série' },
    { phase: 'Fase Cinco', title: 'Blade', year: '2025', type: 'Filme' },
    { phase: 'Fase Cinco', title: 'Homem-Aranha: Um Novo Dia', year: '2026', type: 'Filme' },

    // Animações Adicionais e Multiverso
    { phase: 'Animações Adicionais e Multiverso', title: 'Guardiões da Galáxia (Desenho - 3 Temporadas)', year: '2015-2019', type: 'Animação' }
];

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const timeline = document.getElementById('timeline');

    function renderTimeline(data) {
        timeline.innerHTML = '';
        const phases = [...new Set(data.map(item => item.phase))];

        phases.forEach(phase => {
            const phaseItems = data.filter(item => item.phase === phase);
            if (phaseItems.length === 0) return;

            const phaseContainer = document.createElement('div');
            phaseContainer.classList.add('phase-container');

            const phaseHeader = document.createElement('h2');
            phaseHeader.classList.add('phase-header');
            phaseHeader.textContent = phase;
            phaseHeader.addEventListener('click', () => {
                phaseContainer.classList.toggle('expanded');
            });
            phaseContainer.appendChild(phaseHeader);

            const itemsContainer = document.createElement('div');
            itemsContainer.classList.add('items-container');
            
            phaseItems.forEach(item => {
                const itemElement = document.createElement('div');
                itemElement.classList.add('timeline-item');
                
                itemElement.innerHTML = `
                    <div class="item-info">
                        <div class="item-title">${item.title}</div>
                        <div class="item-year">${item.year}</div>
                    </div>
                    <div class="item-type ${item.type.toLowerCase()}">${item.type}</div>
                `;
                itemsContainer.appendChild(itemElement);
            });

            phaseContainer.appendChild(itemsContainer);
            timeline.appendChild(phaseContainer);
        });
    }

    searchInput.addEventListener('input', (e) => {
        const searchTerm = e.target.value.toLowerCase();
        const filteredData = timelineData.filter(item => 
            item.title.toLowerCase().includes(searchTerm)
        );
        renderTimeline(filteredData);
    });

    renderTimeline(timelineData);
});