"use client";

import styles from "./DevisResult.module.css";

function formatMoney(value) {
  if (value === null || value === undefined || value === "") return "—";

  const numericValue = Number(value);
  if (Number.isNaN(numericValue)) return value;

  return new Intl.NumberFormat("fr-MA", {
    style: "currency",
    currency: "MAD",
    maximumFractionDigits: 0,
  }).format(numericValue);
}

function safeArray(value) {
  return Array.isArray(value) ? value : [];
}

export default function DevisResult({ result, onReset }) {
  const request = result?.request || {};
  const quoteResponse = result?.quote || {};

  const estimate = quoteResponse?.estimate || {};
  const quote = quoteResponse?.quote || {};

  const includedGroups = safeArray(quote?.included_groups);
  const optionalItems = safeArray(quote?.optional_items);
  const recurringItems = safeArray(quote?.recurring_items);
  const totals = quote?.totals || {};
  const notes = safeArray(quote?.notes);
  const missingInformation = safeArray(quote?.missing_information);

  const rows = [
    ...includedGroups.flatMap((group) =>
      safeArray(group?.items).map((item) => ({
        section: group?.label || group?.key || "Inclus",
        item: item?.label || item?.key || "Élément",
        description: item?.description || "—",
        type: "Inclus",
        min: item?.price_min,
        max: item?.price_max,
      }))
    ),
    ...optionalItems.map((item) => ({
      section: item?.category || "Option",
      item: item?.label || item?.key || "Option",
      description: item?.description || "—",
      type: "Option",
      min: item?.price_min,
      max: item?.price_max,
    })),
    ...recurringItems.map((item) => ({
      section: item?.category || "Recurring",
      item: item?.label || item?.key || "Recurring item",
      description: item?.description || "—",
      type: "Récurrent",
      min: item?.price_min,
      max: item?.price_max,
    })),
  ];

  return (
    <div className={styles.wrapper}>
      <div className={styles.headerCard}>
        <div>
          <span className={styles.badge}>Devis SmartDex</span>
          <h2 className={styles.title}>Détail estimatif du projet</h2>
          <p className={styles.subtitle}>
            Tableau récapitulatif des éléments inclus, options et estimations de prix.
          </p>
        </div>

        <button onClick={onReset} className={styles.secondaryButton}>
          Nouveau devis
        </button>
      </div>

      <div className={styles.metaCard}>
        <div className={styles.metaGrid}>
          <div>
            <span>Client</span>
            <strong>{request?.full_name || request?.client_name || "—"}</strong>
          </div>
          <div>
            <span>Email</span>
            <strong>{request?.email || request?.client_email || "—"}</strong>
          </div>
          <div>
            <span>Entreprise</span>
            <strong>{request?.company_name || request?.company || "—"}</strong>
          </div>
          <div>
            <span>Projet</span>
            <strong>{request?.project_type || "—"}</strong>
          </div>
        </div>

        {(request?.description || request?.project_goal) && (
          <div className={styles.descriptionBox}>
            <span>Description du besoin</span>
            <p>{request?.description || request?.project_goal}</p>
          </div>
        )}

        {estimate?.recommendation && (
          <div className={styles.recommendationBox}>
            <span>Recommandation</span>
            <p>{estimate.recommendation}</p>
          </div>
        )}
      </div>

      <div className={styles.tableCard}>
        <div className={styles.tableHeader}>
          <span>Section</span>
          <span>Élément</span>
          <span>Description</span>
          <span>Type</span>
          <span>Min</span>
          <span>Max</span>
        </div>

        {rows.length > 0 ? (
          rows.map((row, index) => (
            <div className={styles.tableRow} key={index}>
              <span className={styles.sectionCell}>{row.section}</span>
              <span className={styles.itemCell}>{row.item}</span>
              <span className={styles.descriptionCell}>{row.description}</span>
              <span>
                <span
                  className={`${styles.typeBadge} ${
                    row.type === "Inclus"
                      ? styles.typeIncluded
                      : row.type === "Option"
                      ? styles.typeOptional
                      : styles.typeRecurring
                  }`}
                >
                  {row.type}
                </span>
              </span>
              <span className={styles.priceCell}>{formatMoney(row.min)}</span>
              <span className={styles.priceCell}>{formatMoney(row.max)}</span>
            </div>
          ))
        ) : (
          <div className={styles.emptyState}>
            Aucun élément n’a été renvoyé par le backend.
          </div>
        )}
      </div>

      <div className={styles.totalsCard}>
        <h3>Totaux</h3>

        <div className={styles.totalsGrid}>
          <div>
            <span>Inclus</span>
            <strong>
              {formatMoney(totals?.included_min)} — {formatMoney(totals?.included_max)}
            </strong>
          </div>

          <div>
            <span>Options</span>
            <strong>
              {formatMoney(totals?.optional_min)} — {formatMoney(totals?.optional_max)}
            </strong>
          </div>

          <div>
            <span>Récurrent</span>
            <strong>
              {formatMoney(totals?.recurring_min)} — {formatMoney(totals?.recurring_max)}
            </strong>
          </div>

          <div className={styles.grandTotal}>
            <span>Total global</span>
            <strong>
              {formatMoney(totals?.grand_total_min)} — {formatMoney(totals?.grand_total_max)}
            </strong>
          </div>
        </div>
      </div>

      {notes.length > 0 && (
        <div className={styles.notesCard}>
          <h3>Notes</h3>
          <ul>
            {notes.map((note, index) => (
              <li key={index}>{note}</li>
            ))}
          </ul>
        </div>
      )}

      {missingInformation.length > 0 && (
        <div className={styles.notesCard}>
          <h3>Informations manquantes</h3>
          <ul>
            {missingInformation.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}