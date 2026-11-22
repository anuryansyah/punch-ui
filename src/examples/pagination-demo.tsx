"use client";

import React, { useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationFirst,
  PaginationItem,
  PaginationLast,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

/**
 * Overview demo
 */
export function PaginationDemo() {
  return <PaginationBasicDemo />;
}

/**
 * 1. Basic Pagination
 */
export function PaginationBasicDemo() {
  const [page, setPage] = useState(2);

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#prev"
            disabled={page === 1}
            onClick={(e) => {
              e.preventDefault();
              setPage((p) => Math.max(1, p - 1));
            }}
          />
        </PaginationItem>

        {[1, 2, 3, 4].map((num) => (
          <PaginationItem key={num}>
            <PaginationLink
              href={`#page-${num}`}
              isActive={page === num}
              onClick={(e) => {
                e.preventDefault();
                setPage(num);
              }}
            >
              {num}
            </PaginationLink>
          </PaginationItem>
        ))}

        <PaginationItem>
          <PaginationNext
            href="#next"
            disabled={page === 4}
            onClick={(e) => {
              e.preventDefault();
              setPage((p) => Math.min(4, p + 1));
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

/**
 * 2. With Ellipsis
 */
export function PaginationEllipsisDemo() {
  const [page, setPage] = useState(5);

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#prev"
            disabled={page === 1}
            onClick={(e) => {
              e.preventDefault();
              setPage((p) => Math.max(1, p - 1));
            }}
          />
        </PaginationItem>

        <PaginationItem>
          <PaginationLink
            href="#p1"
            isActive={page === 1}
            onClick={(e) => {
              e.preventDefault();
              setPage(1);
            }}
          >
            1
          </PaginationLink>
        </PaginationItem>

        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>

        {[4, 5, 6].map((num) => (
          <PaginationItem key={num}>
            <PaginationLink
              href={`#p${num}`}
              isActive={page === num}
              onClick={(e) => {
                e.preventDefault();
                setPage(num);
              }}
            >
              {num}
            </PaginationLink>
          </PaginationItem>
        ))}

        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>

        <PaginationItem>
          <PaginationLink
            href="#p12"
            isActive={page === 12}
            onClick={(e) => {
              e.preventDefault();
              setPage(12);
            }}
          >
            12
          </PaginationLink>
        </PaginationItem>

        <PaginationItem>
          <PaginationNext
            href="#next"
            disabled={page === 12}
            onClick={(e) => {
              e.preventDefault();
              setPage((p) => Math.min(12, p + 1));
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

/**
 * 3. Size (sm vs default)
 */
export function PaginationSizeDemo() {
  return (
    <div className="flex flex-col items-center gap-5">
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#prev" size="sm" />
          </PaginationItem>
          {[1, 2, 3].map((num) => (
            <PaginationItem key={num}>
              <PaginationLink
                href={`#sm-${num}`}
                size="sm"
                isActive={num === 1}
                className="w-8 px-0"
              >
                {num}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext href="#next" size="sm" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>

      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#prev" size="default" />
          </PaginationItem>
          {[1, 2, 3].map((num) => (
            <PaginationItem key={num}>
              <PaginationLink
                href={`#md-${num}`}
                size="icon"
                isActive={num === 1}
              >
                {num}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <PaginationNext href="#next" size="default" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}

/**
 * 4. Compact & First/Last Controls
 */
export function PaginationCompactDemo() {
  const [page, setPage] = useState(2);
  const totalPages = 10;

  return (
    <div className="flex flex-wrap items-center justify-center gap-4">
      <span className="font-mono text-xs font-bold text-muted-foreground">
        Page {page} of {totalPages}
      </span>

      <Pagination className="mx-0 w-auto">
        <PaginationContent>
          <PaginationItem>
            <PaginationFirst
              href="#first"
              disabled={page === 1}
              onClick={(e) => {
                e.preventDefault();
                setPage(1);
              }}
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationPrevious
              href="#prev"
              iconOnly
              disabled={page === 1}
              onClick={(e) => {
                e.preventDefault();
                setPage((p) => Math.max(1, p - 1));
              }}
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext
              href="#next"
              iconOnly
              disabled={page === totalPages}
              onClick={(e) => {
                e.preventDefault();
                setPage((p) => Math.min(totalPages, p + 1));
              }}
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationLast
              href="#last"
              disabled={page === totalPages}
              onClick={(e) => {
                e.preventDefault();
                setPage(totalPages);
              }}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}

/**
 * 5. No Shadow
 */
export function PaginationNoShadowDemo() {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#prev" noShadow />
        </PaginationItem>
        {[1, 2, 3].map((num) => (
          <PaginationItem key={num}>
            <PaginationLink href={`#ns-${num}`} noShadow isActive={num === 2}>
              {num}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext href="#next" noShadow />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

/**
 * 6. Rows Per Page
 */
export function PaginationRowsPerPageDemo() {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const totalItems = 95;
  const totalPages = Math.ceil(totalItems / pageSize);
  const start = (page - 1) * pageSize + 1;
  const end = Math.min(page * pageSize, totalItems);

  return (
    <div className="flex w-full max-w-2xl flex-wrap items-center justify-between gap-4 rounded-lg border-2 border-border bg-card p-4 shadow-brutal-sm">
      <div className="flex items-center gap-2.5">
        <label
          htmlFor="rows-per-page"
          className="text-xs font-bold uppercase tracking-wider text-muted-foreground"
        >
          Rows per page
        </label>
        <select
          id="rows-per-page"
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
            setPage(1);
          }}
          className="h-8 rounded-md border-2 border-border bg-card px-2 font-mono text-xs font-bold text-card-foreground shadow-brutal-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ring"
        >
          {[10, 25, 50].map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
      </div>

      <span className="font-mono text-xs font-bold text-muted-foreground">
        {start}–{end} of {totalItems}
      </span>

      <Pagination className="mx-0 w-auto">
        <PaginationContent>
          <PaginationItem>
            <PaginationFirst
              href="#rpp-first"
              disabled={page === 1}
              onClick={(e) => {
                e.preventDefault();
                setPage(1);
              }}
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationPrevious
              href="#rpp-prev"
              iconOnly
              disabled={page === 1}
              onClick={(e) => {
                e.preventDefault();
                setPage((p) => Math.max(1, p - 1));
              }}
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext
              href="#rpp-next"
              iconOnly
              disabled={page === totalPages}
              onClick={(e) => {
                e.preventDefault();
                setPage((p) => Math.min(totalPages, p + 1));
              }}
            />
          </PaginationItem>
          <PaginationItem>
            <PaginationLast
              href="#rpp-last"
              disabled={page === totalPages}
              onClick={(e) => {
                e.preventDefault();
                setPage(totalPages);
              }}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
