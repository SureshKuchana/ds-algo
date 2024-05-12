// Height of a tree is the maximum depth from root node. Empty root node have a height of 0.

// If given DOM tree, can you create a function to get the height of it?

// For the DOM tree below, we have a height of 4.

{/* 
  <div>
    <div>
      <p>
        <button>Hello</button>
      </p>
    </div>
    <p>
      <span>World!</span>
    </p>
  </div>
 */}


const div = document.createElement('div')
div.innerHTML = `
<div>
 <p>
  <button>Hello</button>
 </p>
</div>
<p>
 <span>World!</span>
</p>
`

function getHeight(tree) {
  if(tree === null) return 0;

  let maxHeight = 0;
  for (const child of tree.children) {
    maxHeight = Math.max(maxHeight, getHeight(child))
  }

  return maxHeight + 1;
}

console.log((getHeight(div)));
