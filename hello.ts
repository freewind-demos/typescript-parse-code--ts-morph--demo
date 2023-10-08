import {Project, ScriptTarget, SyntaxKind} from "ts-morph";

const project = new Project({
    compilerOptions: {
        target: ScriptTarget.ESNext,
    },
});

project.addSourceFileAtPath('./data/data.ts');


project.getSourceFiles().forEach(sourceFile => {
    sourceFile.forEachDescendant(node => {
        console.log("### node", {kind: SyntaxKind[node.getKind()], text: node.getText()})

    })
})

