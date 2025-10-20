// Personal Palette – Hooks bridging UI and the future API with gentle defaults.
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { createEntry, deleteEntry, getEntries, getEntry, updateEntry } from './api';
import { Entry, EntryFilter } from './types';

type AsyncState<T> = {
  data: T;
  loading: boolean;
  error: Error | null;
};

export const useEntries = (filter?: EntryFilter) => {
  const [state, setState] = useState<AsyncState<Entry[]>>({
    data: [],
    loading: true,
    error: null
  });

  useEffect(() => {
    let cancelled = false;
    setState((prev) => ({ ...prev, loading: true }));

    getEntries(filter)
      .then((entries) => {
        if (cancelled) return;
        setState({ data: entries, loading: false, error: null });
      })
      .catch((error: Error) => {
        if (cancelled) return;
        setState({ data: [], loading: false, error });
      });

    return () => {
      cancelled = true;
    };
  }, [filter?.emotion, filter?.from, filter?.impactGte, filter?.q, filter?.tag, filter?.to, filter?.type]);

  return state;
};

export const useEntry = (id: string | undefined) => {
  const [state, setState] = useState<AsyncState<Entry | null>>({
    data: null,
    loading: !!id,
    error: null
  });

  useEffect(() => {
    if (!id) return;

    let cancelled = false;
    setState({ data: null, loading: true, error: null });

    getEntry(id)
      .then((entry) => {
        if (cancelled) return;
        setState({ data: entry, loading: false, error: null });
      })
      .catch((error: Error) => {
        if (cancelled) return;
        setState({ data: null, loading: false, error });
      });

    return () => {
      cancelled = true;
    };
  }, [id]);

  return state;
};

export const useCreateEntry = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const submit = async (payload: Partial<Entry>) => {
    setLoading(true);
    try {
      const { id } = await createEntry(payload);
      navigate(`/entries/${id}`);
    } finally {
      setLoading(false);
    }
  };

  return { submit, loading };
};

export const useUpdateEntry = (id: string) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const submit = async (payload: Partial<Entry>) => {
    setLoading(true);
    try {
      await updateEntry(id, payload);
      navigate(`/entries/${id}`);
    } finally {
      setLoading(false);
    }
  };

  return { submit, loading };
};

export const useDeleteEntry = (id?: string) => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const remove = async () => {
    if (!id) return;
    setLoading(true);
    try {
      await deleteEntry(id);
      navigate('/entries');
    } finally {
      setLoading(false);
    }
  };

  return { remove, loading };
};
