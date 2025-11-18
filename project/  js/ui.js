// UI logic: filters & info panel

function applyFilters() {
    if (!window.graphState) return;
  
    const { nodesDataset, edgesDataset } = window.graphState;
  
    // Active types
    const typeCheckboxes = Array.from(
      document.querySelectorAll(".filter-type")
    );
    const activeTypes = new Set(
      typeCheckboxes
        .filter((cb) => cb.checked)
        .map((cb) => cb.value)
    );
  
    const clusterSelect = document.getElementById("cluster-select");
    const selectedCluster = clusterSelect ? clusterSelect.value : "all";
  
    const originalNodes = nodes; // from data.js
    const originalEdges = edges;
  
    // Update nodes visibility
    const updatedNodes = originalNodes.map((node) => {
      const visibleByType = activeTypes.has(node.type);
      const visibleByCluster =
        selectedCluster === "all" || node.cluster === selectedCluster;
  
      return {
        id: node.id,
        hidden: !(visibleByType && visibleByCluster)
      };
    });
  
    nodesDataset.update(updatedNodes);
  
    // Compute visible node ids
    const visibleNodeIds = new Set(
      nodesDataset.get().filter((n) => !n.hidden).map((n) => n.id)
    );
  
    // Update edges visibility: hide if any endpoint is hidden
    const updatedEdges = originalEdges.map((edge) => ({
      id: edge.id,
      hidden: !(
        visibleNodeIds.has(edge.from) && visibleNodeIds.has(edge.to)
      )
    }));
  
    edgesDataset.update(updatedEdges);
  }
  
  // Info panel rendering
  
  function showNodeInfo(id) {
    const nodeData = nodes.find((n) => n.id === id);
    if (!nodeData || !window.graphState) return;
  
    const { network } = window.graphState;
    const connectedIds = network.getConnectedNodes(id);
  
    const infoEmpty = document.getElementById("info-empty");
    const infoContent = document.getElementById("info-content");
  
    if (!infoEmpty || !infoContent) return;
  
    infoEmpty.classList.add("hidden");
    infoContent.classList.remove("hidden");
  
    // Build pills
    const typeClass = (() => {
      switch (nodeData.type) {
        case "Ancient Source":
          return "type-ancient";
        case "Modern Media":
          return "type-modern";
        case "Trope":
          return "type-trope";
        case "Political Use":
          return "type-political";
        default:
          return "";
      }
    })();
  
    const sourcesText =
      nodeData.sources && nodeData.sources.length > 0
        ? nodeData.sources.join(", ")
        : "—";
  
    // Connected nodes list
    const connectedNodes = nodes.filter((n) =>
      connectedIds.includes(n.id)
    );
  
    const connectedHtml =
      connectedNodes.length === 0
        ? "<p class=\"info-subtle\">No direct connections (in this subset).</p>"
        : `
          <ul class="info-connected-list">
            ${connectedNodes
              .map((n) => {
                const relation = edges.find(
                  (e) =>
                    (e.from === nodeData.id && e.to === n.id) ||
                    (e.to === nodeData.id && e.from === n.id)
                );
                const relLabel = relation
                  ? relation.relationType
                  : "linked";
                return `<li><strong>${n.label}</strong><span> · ${relLabel}</span></li>`;
              })
              .join("")}
          </ul>
        `;
  
    infoContent.innerHTML = `
      <h2 class="info-title">${nodeData.label}</h2>
      <p class="info-subtitle">${nodeData.type} · ${nodeData.cluster}</p>
  
      <div class="info-pill-row">
        <span class="info-pill ${typeClass}">${nodeData.type}</span>
        <span class="info-pill">${nodeData.cluster}</span>
      </div>
  
      <div>
        <div class="info-section-title">Description</div>
        <p>${nodeData.description}</p>
      </div>
  
      <div>
        <div class="info-section-title">Analytical Note</div>
        <p>${nodeData.note}</p>
      </div>
  
      <div>
        <div class="info-section-title">Sources</div>
        <p>${sourcesText}</p>
      </div>
  
      <div>
        <div class="info-section-title">Connected Nodes</div>
        ${connectedHtml}
      </div>
    `;
  }
  
  // Hook up filter events after DOM & graph ready
  
  function initUI() {
    const typeCheckboxes = document.querySelectorAll(".filter-type");
    typeCheckboxes.forEach((cb) => {
      cb.addEventListener("change", applyFilters);
    });
  
    const clusterSelect = document.getElementById("cluster-select");
    if (clusterSelect) {
      clusterSelect.addEventListener("change", applyFilters);
    }
  
    // Initial filter application
    applyFilters();
  }
  
  // Expose to graph.js
  window.initUI = initUI;
  window.showNodeInfo = showNodeInfo;
  