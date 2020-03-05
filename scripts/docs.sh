#!/bin/bash
echo "**** scripts/docs.sh START *******"
echo "******** Remove TypeScript build ********"
rm -rf build
echo "******** TypeScript build ********"
npx tsc
echo "**** Generate docs *******"
npx typedoc --out docs src
echo "**** go to docs folder *******"
cd docs
echo "**** create .nojekyll in docs *******"
touch .nojekyll
echo "**** exit docs folder *******"
cd ..

echo "**** scripts/docs.sh END *******"