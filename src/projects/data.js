import lorem from 'lorem-ipsum-simple';

let count = 10;
const arr = [];
const logoExamples = [
  'data:image/svg+xml;base64,77u/PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjY0IiBoZWlnaHQ9IjY0Ij4gICAgPHBhdGggZD0iTTI2LDVoLTVoLTFoLTAuMDU0bC0xLDNIMTcuM0wxNyw5bC0yLjktNEgxNEg5LjEwMkg4LjFIOC4wNTNMMywyMWw1LjQsNWg1LjlsMC45LTMuNmwwLjYwNCwwLjU3NWgxLjZMMjAsMjZoNmwzLTE1TDI2LDV6IE0yMS43MSwxMWwxLTNIMjBsMC42NjctMmg0LjUxMmwtMS4wNTgsNUgyMS43MXogTTIxLjMyMyw5bC0wLjY2NywyaC0zLjMyOGwwLjU4NC0ySDIxLjMyM3ogTTguMTQ1LDhsMC42MzgtMmg0Ljc4NWwtMC42MzYsMkg4LjE0NSB6IE00LjM2OSwyMGwxLjU0Ny01aDEuODE2bC0xLjMzMyw0SDkuNjdMOS4zOCwyMEg0LjM2OXogTTkuOTU5LDE4SDcuOGwtMC4wMjQsMC4wM0w4LjExOSwxN2gyLjEyOUw5Ljk1OSwxOHogTTE2LjUsMjFsMS43LTYuNmgtMS45IGwtMS4wNzMsMy41NTVoLTMuNEwxMi45LDE0LjRIMTFMMTAuNTM3LDE2SDguNDUybDAuNjY3LTJINi4yMzJsMS42MDYtNWg2LjQ0NWwtMC44NzQsM0gyMy45NWwtMi4yNSw5SDE2LjV6Ii8+PC9zdmc+',
  'data:image/svg+xml;base64,77u/PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MCA1MCIgZW5hYmxlLWJhY2tncm91bmQ9Im5ldyAwIDAgNTAgNTAiIHdpZHRoPSI1MCIgaGVpZ2h0PSI1MCI+ICAgIDxwYXRoIHN0eWxlPSJ0ZXh0LWluZGVudDowO3RleHQtYWxpZ246c3RhcnQ7bGluZS1oZWlnaHQ6bm9ybWFsO3RleHQtdHJhbnNmb3JtOm5vbmU7YmxvY2stcHJvZ3Jlc3Npb246dGI7LWlua3NjYXBlLWZvbnQtc3BlY2lmaWNhdGlvbjpCaXRzdHJlYW0gVmVyYSBTYW5zIiBkPSJNIDEyIDMgQyA3LjA1NDU0NTUgMyAzIDcuMDU0NTQ1NSAzIDEyIEwgMyAzOCBDIDMgNDIuOTQ1NDU1IDcuMDU0NTQ1NSA0NyAxMiA0NyBMIDM4IDQ3IEMgNDIuOTQ1NDU1IDQ3IDQ3IDQyLjk0NTQ1NSA0NyAzOCBMIDQ3IDEyIEMgNDcgNy4wNTQ1NDU1IDQyLjk0NTQ1NSAzIDM4IDMgTCAyOCAzIEwgMjEuNzE4NzUgMyBMIDEyIDMgeiBNIDEyIDUgTCAyMS43NSA1IEwgMjggNSBDIDMxLjg1NDU0NSA1IDM1IDguMTQ1NDU0NSAzNSAxMiBMIDM1IDM4LjU2MjUgTCAxOS43MTg3NSAyMy4yODEyNSBBIDEuMDE2NDY2IDEuMDE2NDY2IDAgMSAwIDE4LjI4MTI1IDI0LjcxODc1IEwgMzUuMjgxMjUgNDEuNzE4NzUgQSAxLjAwMDEgMS4wMDAxIDAgMCAwIDM3IDQxIEwgMzcgMTIgQyAzNyA5LjE3ODE5NiAzNS42NzczNjggNi42NTQwMTE0IDMzLjYyNSA1IEwgMzggNSBDIDQxLjg1NDU0NSA1IDQ1IDguMTQ1NDU0NSA0NSAxMiBMIDQ1IDM4IEMgNDUgNDEuODU0NTQ1IDQxLjg1NDU0NSA0NSAzOCA0NSBMIDIyIDQ1IEMgMTguMTQ1NDU1IDQ1IDE1IDQxLjg1NDU0NSAxNSAzOCBMIDE1IDExLjQzNzUgTCAzMC4yODEyNSAyNi43MTg3NSBBIDEuMDE2NDY2IDEuMDE2NDY2IDAgMSAwIDMxLjcxODc1IDI1LjI4MTI1IEwgMTQuNzE4NzUgOC4yODEyNSBBIDEuMDAwMSAxLjAwMDEgMCAwIDAgMTMuODc1IDggQSAxLjAwMDEgMS4wMDAxIDAgMCAwIDEzIDkgTCAxMyAzOCBDIDEzIDQwLjgyMTgwNCAxNC4zMjI2MzIgNDMuMzQ1OTg5IDE2LjM3NSA0NSBMIDEyIDQ1IEMgOC4xNDU0NTQ1IDQ1IDUgNDEuODU0NTQ1IDUgMzggTCA1IDEyIEMgNSA4LjE0NTQ1NDUgOC4xNDU0NTQ1IDUgMTIgNSB6IiBvdmVyZmxvdz0idmlzaWJsZSIgZW5hYmxlLWJhY2tncm91bmQ9ImFjY3VtdWxhdGUiIGZvbnQtZmFtaWx5PSJCaXRzdHJlYW0gVmVyYSBTYW5zIi8+PC9zdmc+',
  'data:image/svg+xml;base64,77u/PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNiIgaGVpZ2h0PSIyNiIgdmlld0JveD0iMCAwIDI2IDI2Ij4gICAgPHBhdGggZD0iTSAxNS41IDIgQyAxNC42NzU1MjUgMiAxMy45MDQyNzkgMi4zNjk2MzAzIDEzLjQwNjI1IDIuOTA2MjUgQyAxMi45MDgyMjEgMy40NDI4Njk3IDEyLjYzNDg3NiA0LjA5NDQwOTIgMTIuNDM3NSA0Ljc4MTI1IEMgMTIuMTE5ODQ3IDUuODg2NjM0MyAxMi4wMjI5MyA3LjExMzU5MDggMTIgOC4yMTg3NSBDIDkuNjg0NzA1MiA4LjM1NDQ4OTYgNy41ODY4MTA5IDguOTY2MzkyNyA1Ljg0Mzc1IDkuOTA2MjUgQyA1LjEzNzE3OTUgOS4zNzgyODQzIDQuMjg2NTM0MiA5LjA4NzUxMDggMy40Njg3NSA5LjA5Mzc1IEMgMi41Mzg2NzE4IDkuMTAwODQ1OSAxLjY1NDM2NTUgOS40NTc3ODM0IDEgMTAuMTg3NSBDIC0wLjI1MjEwMjk3IDExLjU4MjUxOSAtMC4xMDgyNzUzIDEzLjg2MTM1NSAxLjM0Mzc1IDE1LjIxODc1IEMgMS4yNTIwMjMxIDE1LjYzNjAwOSAxLjE4NzUgMTYuMDY0NzIgMS4xODc1IDE2LjUgQyAxLjE4NzUgMjEuMDkyIDYuNDc2IDI0LjgxMjUgMTMgMjQuODEyNSBDIDE5LjUyNCAyNC44MTI1IDI0LjgxMjUgMjEuMDkxIDI0LjgxMjUgMTYuNSBDIDI0LjgxMjUgMTYuMDY0NjI1IDI0Ljc0Nzk2MSAxNS42MzYwNyAyNC42NTYyNSAxNS4yMTg3NSBDIDI2LjEwODI3NSAxMy44NjEzNTUgMjYuMjUyMTAzIDExLjU4MjUxOSAyNSAxMC4xODc1IEMgMjQuMzQ1NjM1IDkuNDU3NzgzNCAyMy40NjEzMjggOS4xMDA4NDU5IDIyLjUzMTI1IDkuMDkzNzUgQyAyMS43MTM0NjYgOS4wODc1MTA4IDIwLjg2MjgyMSA5LjM3ODI4NDMgMjAuMTU2MjUgOS45MDYyNSBDIDE4LjQyMDk0IDguOTcwNjU3NSAxNi4zMzQ5MzYgOC4zNTc5ODczIDE0LjAzMTI1IDguMjE4NzUgQyAxNC4wNjM0NDkgNy4yMDA0MjI5IDE0LjE0NjE4OSA2LjEzOTk3MjcgMTQuMzc1IDUuMzQzNzUgQyAxNC41MTg4NzQgNC44NDMwOTA4IDE0LjY5MTQ2NiA0LjQ3OTAwNTMgMTQuODc1IDQuMjgxMjUgQyAxNS4wNTg1MzQgNC4wODM0OTQ3IDE1LjE4OTQ3NSA0IDE1LjUgNCBDIDE2LjE2NjY2NyA0IDE2LjI1MjM3NSA0LjE4OTQ3NzEgMTYuNjU2MjUgNC42NTYyNSBDIDE2Ljg1ODE4OCA0Ljg4OTYzNjQgMTcuMDk1NTI3IDUuMTgxOTY3OSAxNy40Njg3NSA1LjQ2ODc1IEMgMTcuODQxOTczIDUuNzU1NTMyMSAxOC4zOTg2NTkgNiAxOSA2IEwgMTkgNCBDIDE4LjgzMTg0MSA0IDE4LjgwMjMwOCAzLjk5NDQ2NzkgMTguNjg3NSAzLjkwNjI1IEMgMTguNTcyNjkyIDMuODE4MDMyMSAxOC40MTgxODcgMy42MTAzNjM2IDE4LjE4NzUgMy4zNDM3NSBDIDE3LjcyNjEyNSAyLjgxMDUyMjkgMTYuODMzMzMzIDIgMTUuNSAyIHogTSAyMiAyLjE4NzUgQyAyMC40NDcgMi4xODc1IDE5LjE4NzUgMy40NDYgMTkuMTg3NSA1IEMgMTkuMTg3NSA2LjU1NCAyMC40NDcgNy44MTI1IDIyIDcuODEyNSBDIDIzLjU1MyA3LjgxMjUgMjQuODEyNSA2LjU1NCAyNC44MTI1IDUgQyAyNC44MTI1IDMuNDQ2IDIzLjU1MyAyLjE4NzUgMjIgMi4xODc1IHogTSAyMiAzLjE4NzUgQyAyMi45OTkgMy4xODc1IDIzLjgxMjUgNCAyMy44MTI1IDUgQyAyMy44MTI1IDYgMjIuOTk5IDYuODEyNSAyMiA2LjgxMjUgQyAyMS4wMDEgNi44MTI1IDIwLjE4NzUgNS45OTkgMjAuMTg3NSA1IEMgMjAuMTg3NSA0LjAwMSAyMS4wMDEgMy4xODc1IDIyIDMuMTg3NSB6IE0gMTMgOS43ODEyNSBDIDE4LjUzNiA5Ljc4MTI1IDIzLjIxODc1IDEyLjg2MiAyMy4yMTg3NSAxNi41IEMgMjMuMjE4NzUgMjAuMTM5IDE4LjUzNiAyMy4yMTg3NSAxMyAyMy4yMTg3NSBDIDcuNDY0IDIzLjIxODc1IDIuNzgxMjUgMjAuMTM5IDIuNzgxMjUgMTYuNSBDIDIuNzgxMjUgMTIuODYyIDcuNDY0IDkuNzgxMjUgMTMgOS43ODEyNSB6IE0gMy41IDEwLjY4NzUgQyAzLjc3Njg0MjEgMTAuNjkwMjg5IDQuMDY1ODE5MyAxMC43NTM3MzYgNC4zNDM3NSAxMC44NzUgQyAzLjM0MDIxMDggMTEuNjM4MzIyIDIuNTQyNTE4NyAxMi41MTMwNTEgMiAxMy41IEMgMS42MjQzMjY3IDEyLjcyNzQ1OCAxLjcyNzk3NTMgMTEuNzYxOTc2IDIuMTg3NSAxMS4yNSBDIDIuNTIzMTM0NSAxMC44NzU3MTYgMi45ODg5MDcgMTAuNjgyMzUxIDMuNSAxMC42ODc1IHogTSAyMi41IDEwLjY4NzUgQyAyMy4wMTEwOTMgMTAuNjgyMzUxIDIzLjQ3Njg2NSAxMC44NzU3MTcgMjMuODEyNSAxMS4yNSBDIDI0LjI3MjAyNSAxMS43NjE5NzYgMjQuMzc1NjczIDEyLjcyNzQ1OCAyNCAxMy41IEMgMjMuNDU3NTU1IDEyLjUxMjk5MiAyMi42NTk3MjIgMTEuNjM4MjY4IDIxLjY1NjI1IDEwLjg3NSBDIDIxLjkzNDE4MSAxMC43NTM3MzYgMjIuMjIzMTU4IDEwLjY5MDI4OSAyMi41IDEwLjY4NzUgeiBNIDkgMTMuMTg3NSBDIDcuOTk4NzA3OCAxMy4xODc1IDcuMTg3NSAxMy45OTg3MDggNy4xODc1IDE1IEMgNy4xODc1IDE2LjAwMTI5MiA3Ljk5ODcwNzggMTYuODEyNSA5IDE2LjgxMjUgQyAxMC4wMDEyOTIgMTYuODEyNSAxMC44MTI1IDE2LjAwMTI5MiAxMC44MTI1IDE1IEMgMTAuODEyNSAxMy45OTg3MDggMTAuMDAxMjkyIDEzLjE4NzUgOSAxMy4xODc1IHogTSAxNyAxMy4xODc1IEMgMTUuOTk4NzA4IDEzLjE4NzUgMTUuMTg3NSAxMy45OTg3MDggMTUuMTg3NSAxNSBDIDE1LjE4NzUgMTYuMDAxMjkyIDE1Ljk5ODcwOCAxNi44MTI1IDE3IDE2LjgxMjUgQyAxOC4wMDEyOTIgMTYuODEyNSAxOC44MTI1IDE2LjAwMTI5MiAxOC44MTI1IDE1IEMgMTguODEyNSAxMy45OTg3MDggMTguMDAxMjkyIDEzLjE4NzUgMTcgMTMuMTg3NSB6IE0gOC4wMzEyNSAxOS4zNDM3NSBDIDguNjY3MjUgMjAuNjU5NzUgMTAuNjM1IDIxLjkzNzUgMTMgMjEuOTM3NSBDIDE1LjM2MyAyMS45Mzc1IDE3LjM2NSAyMC42NTk3NSAxOCAxOS4zNDM3NSBDIDE2Ljg0NSAyMC4wODg3NSAxNS4wMiAyMC41OTM3NSAxMyAyMC41OTM3NSBDIDEwLjk3OSAyMC41OTM3NSA5LjE4ODI1IDIwLjA4ODc1IDguMDMxMjUgMTkuMzQzNzUgeiIvPjwvc3ZnPg=='
];

while (count--) {
  const randomColor = (function lol(m, s, c) {
    return s[m.floor(m.random() * s.length)] + (c && lol(m, s, c - 1));
  })(Math, 'ABCDEF', 4);
  arr.push({
    projectStyles: {},
    slug: `slug-${count}`,
    backgroundColor: randomColor,
    color: '#333333',
    title: lorem(2),
    description: lorem(Math.floor(Math.random() * 500)),
    image: logoExamples[Math.floor(Math.random() * logoExamples.length)],
    links: [
      {
        text: 'Github',
        href: 'http://github.com'
      },
      {
        text: 'Visit site',
        href: 'http://google.com'
      }
    ]
  });
}

export default arr;
