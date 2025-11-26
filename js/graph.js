// Graph initialization and interactions

let network = null;
let nodesDataset = null;
let edgesDataset = null;

let lastHoverNodeId = null;

function getTypeColor(type) {
  switch (type) {
    case "Ancient Source":
      return { background: "#f6d365", border: "#f6d365" };
    case "Modern Media":
      return { background: "#7f5af0", border: "#7f5af0" };
    case "Trope":
      return { background: "#ff6b6b", border: "#ff6b6b" };
    case "Political Use":
      return { background: "#2ec4b6", border: "#2ec4b6" };
    default:
      return { background: "#ffffff", border: "#ffffff" };
  }
}

window.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("network");

  // Enrich nodes with visual style + tooltip
  const styledNodes = nodes.map((node) => {
    const color = getTypeColor(node.type);
    return {
      ...node,
      shape: "dot",
      size: 16,
      borderWidth: 1.5,
      shadow: {
        enabled: true,
        color: "rgba(0,0,0,0.8)",
        size: 6,
        x: 0,
        y: 2
      },
      font: {
        color: "#fdfdfd",
        face: "system-ui",
        size: 14,
        strokeWidth: 0
      },
      color: {
        background: color.background,
        border: color.border,
        highlight: {
          background: color.background,
          border: "#ffffff"
        },
        hover: {
          background: color.background,
          border: "#ffffff"
        }
      },
      title: `<strong>${node.label}</strong><br /><span style="font-size: 11px; opacity: 0.85;">${node.type} · ${node.cluster}</span>`
    };
  });

  const styledEdges = edges.map((edge) => ({
    ...edge,
    arrows: {
      to: {
        enabled: true,
        scaleFactor: 0.7
      }
    },
    color: {
      color: "rgba(158, 176, 230, 0.75)",
      highlight: "rgba(255, 255, 255, 0.95)",
      hover: "rgba(230, 236, 255, 0.95)"
    },
    width: 1.4,
    smooth: {
      enabled: true,
      type: "dynamic",
      roundness: 0.4
    }
  }));

  nodesDataset = new vis.DataSet(styledNodes);
  edgesDataset = new vis.DataSet(styledEdges);

  const data = {
    nodes: nodesDataset,
    edges: edgesDataset
  };

  const options = {
    layout: {
      improvedLayout: true
    },
    physics: {
      enabled: true,
      stabilization: {
        enabled: true,
        iterations: 150,
        updateInterval: 30
      },
      barnesHut: {
        gravitationalConstant: -4500,
        centralGravity: 0.3,
        springLength: 150,
        springConstant: 0.03,
        damping: 0.18,
        avoidOverlap: 0.25
      }
    },
    interaction: {
      hover: true,
      hoverConnectedEdges: true,
      tooltipDelay: 80,
      zoomView: true,
      dragView: true,
      multiselect: false,
      selectable: true
    },
    nodes: {
      scaling: {
        min: 10,
        max: 26
      }
    },
    edges: {
      selectionWidth: 2,
      smooth: {
        enabled: true
      }
    }
  };

  network = new vis.Network(container, data, options);
  network.setOptions({ physics: { stabilization: false } }); // finish stabilizing faster

  /* -----------------------------
     INTERACTION BEHAVIOR
     ----------------------------- */

  // Click -> show info + focus that node
  network.on("click", (params) => {
    if (params.nodes && params.nodes.length > 0) {
      const nodeId = params.nodes[0];

      // Focus on the selected node with gentle zoom
      network.focus(nodeId, {
        scale: 1.1,
        animation: {
          duration: 500,
          easingFunction: "easeInOutQuad"
        }
      });

      if (typeof window.showNodeInfo === "function") {
        window.showNodeInfo(nodeId);
      }
    }
  });

  // Hover -> temporarily enlarge node
  network.on("hoverNode", (params) => {
    const nodeId = params.node;
    if (!nodeId) return;

    // Reset previous hover
    if (lastHoverNodeId && lastHoverNodeId !== nodeId) {
      nodesDataset.update({ id: lastHoverNodeId, size: 16 });
    }

    nodesDataset.update({ id: nodeId, size: 22 });
    lastHoverNodeId = nodeId;
  });

  // Blur -> shrink back to normal
  network.on("blurNode", (params) => {
    const nodeId = params.node;
    if (!nodeId) return;

    nodesDataset.update({ id: nodeId, size: 16 });
    if (lastHoverNodeId === nodeId) {
      lastHoverNodeId = null;
    }
  });

  // Cursor feedback (hand vs default)
  network.on("dragStart", () => {
    container.style.cursor = "grabbing";
  });

  network.on("dragEnd", () => {
    container.style.cursor = "default";
  });

  network.on("zoom", () => {
    container.style.cursor = "grab";
    setTimeout(() => {
      container.style.cursor = "default";
    }, 250);
  });

  // Expose graph state
  window.graphState = {
    network,
    nodesDataset,
    edgesDataset
  };

  if (typeof window.initUI === "function") {
    window.initUI();
  }
});
