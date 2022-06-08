const { MerkleTree } = require('merkletreejs');
const SHA256 = require('keccak256');

const whitelisters = [
    '0x2b798709927f32430Bf9b6477e62aDaa327D25a2', 
    '0x2b798709927f32430Bf9b6477e62aDaa327D25a2', 
    '0x2b798709927f32430Bf9b6477e62aDaa327D25a2',
];

const leaves = whitelisters.map(x => SHA256(x))
  const tree = new MerkleTree(leaves, SHA256, {sortPairs: true})
  const root = tree.getRoot().toString('hex')
  const leaf = SHA256('0xD49496948533E5aEEE247f7B3380aF6a1040fE7E')
  const proof = tree.getProof(leaf)
  console.log("proof ===================");
  console.log(proof)
  console.log("leaf ===================");
  console.log(leaf)
  console.log("root ===================");
  console.log(root)
  console.log("tree.verify ===================");
  console.log(tree.verify(proof, leaf, root)) // true
  const Hexroot = tree.getHexRoot();
  console.log("===================");
  console.log(Hexroot);
  console.log("===================");
  console.log(tree.print());
  console.log("===================");
  console.log("Array Length: ", whitelisters.length -1);
  const HexProof = tree.getHexProof(leaves[8]);
  console.log(HexProof);
