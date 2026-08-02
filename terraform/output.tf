output "aks_creation_status" {
  description = "The final deployment status of the AKS cluster"
  value       = length(azurerm_kubernetes_cluster.aks) > 0 ? "CREATED" : "NOT_CREATED"
}