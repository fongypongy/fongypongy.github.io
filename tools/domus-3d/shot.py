import asyncio, sys
from playwright.async_api import async_playwright
model = sys.argv[1]
async def main():
    async with async_playwright() as p:
        b = await p.chromium.launch(executable_path='/usr/bin/google-chrome', args=['--no-sandbox','--use-angle=swiftshader','--enable-unsafe-swiftshader','--ignore-gpu-blocklist'])
        pg = await b.new_page(viewport={'width':900,'height':700})
        logs=[]; pg.on('console', lambda m: logs.append(m.text))
        for i,orbit in enumerate(['35deg 60deg auto','215deg 55deg auto','0deg 0deg auto']):
            html=open('view.html').read().replace('MODEL',model).replace('ORBIT',orbit)
            open('v.html','w').write(html)
            await pg.goto('http://localhost:4400/v.html'); 
            await pg.wait_for_function("document.getElementById('mv').loaded === true", timeout=60000)
            await pg.wait_for_timeout(1500)
            await pg.screenshot(path=f'/home/claude/shots/m{i}.png')
        print([l for l in logs if 'rror' in l][:3])
        await b.close()
asyncio.run(main())
