# rakt-rJavascript
Ebben a kódban egy web alapú étel és ruha raktárat lehet kezelni. Lehet szerkeszteni, törölni, és feltölteni.

HASZNÁLATI ÚTMUTATÓ
1. npm install i ez le fogja tőlteni a szükséges csomagokat a kódhoz.
2. Ahhoz hogy a program teljesen tudjon működni, szükség van egy MongoDB cluster-re, és egy csatlakozási Linkre (Application).
3. Hozzon létre egy .env fájlt, majd MONGO_URL váltózót amihez hozzárendeli a MongoDB Cluster linkjét.
4. nodemon server.js -el el fog tudni indulni a program.

jsProjekt V4 TARTOZÓ LEÍRÁS
SPECIFIKÁCIÓK
A program egy raktár vezetésére alkalmas, amiben ruhákat és ételeket lehet letárolni/lementeni, a lementet adatok egy távoli adatbázisba kerülnek.
CRUD Műveletek-
1. a) Törlés, a már lementett termékeket lehet törölni is.
2. b) Szerkesztés, a már lementett termékeket lehet szerkeszteni, azonban a kép az kivétel ez alól.
3. c) Feltőltés, ruhákat és ételeket tudunk felvinni a rendszerbe, mindkettőnek külön oldala van, majd a feltőltött termékek ki lesznek listázva az oldalra.
4. d) Modern dizájn, és egyben reszponzív is.

HASZNÁLT TECHNOLÓGIÁK
Backend: NodeJs, Express. MongoDB
Frontend: ejs, css, bootstrap.

jsProjekt V4.1 TARTOZÓ LEÍRÁS
SPECIFIKÁCIÓK:
1. a) Törlés, a már lementett termékeket lehet törölni is.
2. b) Szerkesztés, a már lementett termékeket lehet szerkeszteni, azonban a kép az kivétel ez alól.
3. c) Feltőltés, ruhákat és ételeket tudunk felvinni a rendszerbe, mindkettőnek külön oldala van, majd a feltőltött termékek ki lesznek listázva az oldalra.
4. d) Modern dizájn, és egyben reszponzív is.
5. e) Szűrés, az adatokat egy feltételű szűrésel ki lehet keresni: Terméktipus, Maximum mennyiség, Minimum mennyiség alapján
Több szűrés egyszerre nem működik.

HASZNÁLT TECHNOLOGÓIÁK:
Backend: NodeJs, Express, MongoDB
Frontend: ejs, css, Javascript, bootstrap



